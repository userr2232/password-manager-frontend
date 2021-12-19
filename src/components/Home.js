import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import AccountList from './organisms/AccountList'
import AccountCreation from './organisms/AccountCreation'
import AllDetails from './organisms/AllDetails'
import { apiUrl } from '../config';
import axios from 'axios';
import { PasswordContext } from '../contexts/password';
import aes from 'crypto-js/aes';

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

  const {context_password} = useContext(PasswordContext);

  useEffect(() => {
    async function init() {
      const jwt = localStorage.getItem('jwt')
      const encrypted_secret = await axios(apiUrl + '/login/secret', {
          method: 'get',
          headers: { Authorization: 'Bearer ' + jwt }
      })
      console.log("encrypted_secret", encrypted_secret.data);

      console.log("context_password", context_password)
      const secret_key = aes.decrypt(encrypted_secret.data.secretkey, context_password).toString();
      console.log("secret_key", secret_key);

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
      setAccounts(accounts.concat({...account}))

    }

    return (
    <Wrapper>
        <InnerWrapper>
          <h1>Bienvenido</h1>
          <h3 style={{margin: "40px auto"}}>Tus Cuentas</h3>
          <AccountList accounts={accounts} accountSelector={accountSelector} hideAccountDetails={() => setShowDetails(false)} showAccountCreation={() => setShowAccountCreation(true)}/>
        </InnerWrapper>
        {showDetails ? <AllDetails site={site} username={username} password={password} 
                    strength={strength} lastModified={lastModified} 
                    created={created}/> : <></>}
        {showAccountCreation ? <AccountCreation addToListAndCreate={addToListAndCreate}/> : <></>}
    
    </Wrapper>)
}

export default Home;