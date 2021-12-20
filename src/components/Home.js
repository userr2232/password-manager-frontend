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
  const [secretKey, setSecretKey] = useState("")

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
      const jwt = localStorage.getItem('jwt')
      const encrypted_secret = await axios(apiUrl + '/login/secret', {
          method: 'get',
          headers: { Authorization: 'Bearer ' + jwt }
      })
      console.log("encrypted_secret", encrypted_secret.data);

      console.log("context_password", context_password)
      const secret_key = aes.decrypt(encrypted_secret.data.secretkey, context_password.password).toString();
      console.log("secret_key", secret_key);
      setSecretKey(secret_key)

      const response = await axios(apiUrl + '/passwords', {
        method: 'get',
        headers: { Authorization: 'Bearer ' + jwt }
      });
      
      if (response.ok) {
          const data = await response.json()
          console.log(data)
          

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
      const encrypted_accounts = aes.encrypt(new_accounts_str, secretKey).toString();
      const jwt = localStorage.getItem('jwt');
      axios(apiUrl + '/passwords', {
        method: 'post',
        data: encrypted_accounts,
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