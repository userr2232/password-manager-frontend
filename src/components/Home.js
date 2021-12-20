import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import AccountList from './organisms/AccountList'
import AccountCreation from './organisms/AccountCreation'
import AllDetails from './organisms/AllDetails'
import { apiUrl } from '../config';
import axios from 'axios';
import { PasswordContext } from '../contexts/password';
import aes from 'crypto-js/aes';
import { Button } from '@chakra-ui/button';
import { Flex, Heading } from '@chakra-ui/layout';
import { useAuth } from '../auth/UseAuth';
import { useNavigate } from 'react-router';
import { emptyObject } from '../utils';
import CryptoJS from 'crypto-js';

const Wrapper = styled.div`
  display: flex;
  padding: 35px 75px;
  height: 100vh;
  width: 100vw;
  background-color: ghostwhite;
  flex-direction: row;
`;

const InnerWrapper = styled.div`
margin-right: 80px;
`;

const Home = () => {
  const [site, setSite] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [strength, setStrength] = useState(null);
  const [lastModified, setLastModified] = useState(null);
  const [created, setCreated] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showAccountCreation, setShowAccountCreation] = useState(false);
  const [accounts, setAccounts] = useState([]);

  const context_password = useContext(PasswordContext);

  const navigate = useNavigate()
  const {setUser} = useAuth()
  
  const handleClick = () => {
    localStorage.removeItem("jwt")
    setUser(false)
    navigate('/login', { replace: true })
  }

  useEffect(() => {
    async function init() {
      //const pass = alert("DAME TU PASSWORD")
      const jwt = localStorage.getItem('jwt')
      
      const secretKey = localStorage.getItem('sk')

      if(!jwt || !secretKey) {
        localStorage.clear()
        navigate('/login', { replace: true})
        return
      }
      const response = await axios(apiUrl + '/passwords', {
        method: 'get',
        headers: { Authorization: 'Bearer ' + jwt }
      });
      if (response.status === 200 && !emptyObject(response.data)) {
          let decrypted_accounts = aes.decrypt(response.data.data, secretKey)
          decrypted_accounts = decrypted_accounts.toString(CryptoJS.enc.Utf8)
          setAccounts(JSON.parse(decrypted_accounts))
      } else {
          console.log("error")
      }
    }
    init()
  }, [])

    const accountSelector = details => {
      setShowAccountCreation(false);
      setSite(details.site);
      setUsername(details.username);
      setPassword(details.password);
      setStrength(details.strength);
      setLastModified(details.lastModified);
      setCreated(details.created);
      setShowDetails(true);
    }

    const addToListAndCreate = (account) => {
      const new_accounts = accounts.concat({...account})
      setAccounts(new_accounts);
      const new_accounts_str = JSON.stringify(new_accounts);
      const secretKey = localStorage.getItem('sk')
      const encrypted_accounts = aes.encrypt(new_accounts_str, secretKey).toString();
      const jwt = localStorage.getItem('jwt');
      let path = "create"
      if(new_accounts.length > 1) {
        path = "update"
      }
      axios(apiUrl + '/passwords/'+path, {
        method: 'post',
        data: {
          'data': encrypted_accounts
        },
        headers: {
          Authorization: 'Bearer ' + jwt,
          crossOrigin: true,
          'Content-Type': 'application/json'
        }
      });
    }

    return (
      <>
      <Flex direction={'row-reverse'} paddingTop={'2em'} paddingRight={'2em'}>
        <Button onClick={handleClick}>Cerrar sesión</Button>
      </Flex>
        <Wrapper>
          <InnerWrapper>
            <Heading>Bienvenido</Heading>
            <h3 style={{margin: "40px auto"}}>Tus Cuentas</h3>
            <AccountList accounts={accounts} accountSelector={accountSelector} hideAccountDetails={() => setShowDetails(false)} showAccountCreation={() => setShowAccountCreation(true)}/>
          </InnerWrapper>
          {showDetails ? <AllDetails site={site} username={username} password={password} 
                      strength={strength} lastModified={lastModified} 
                      created={created}/> : <></>}
          {showAccountCreation ? <AccountCreation addToListAndCreate={addToListAndCreate}/> : <></>}
      </Wrapper>
    </>)
}

export default Home;