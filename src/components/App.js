import React, { useState } from 'react';
import styled from 'styled-components';
import AccountList from './organisms/AccountList';
import AllDetails from './organisms/AllDetails';
import AccountCreation from './organisms/AccountCreation';
import { ChakraProvider } from '@chakra-ui/provider';

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

const App = () => {
  const [site, setSite] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [strength, setStrength] = useState(null);
  const [lastModified, setLastModified] = useState(null);
  const [created, setCreated] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showAccountCreation, setShowAccountCreation] = useState(false);

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

  return (
    <ChakraProvider>
      <Wrapper>
        <InnerWrapper>
          <h1>Bienvenido</h1>
          <h3 style={{margin: "40px auto"}}>Tus Cuentas</h3>
          <AccountList accountSelector={accountSelector} hideAccountDetails={() => setShowDetails(false)} showAccountCreation={() => setShowAccountCreation(true)}/>
        </InnerWrapper>
        {showDetails ? <AllDetails site={site} username={username} password={password} 
                    strength={strength} lastModified={lastModified} 
                    created={created}/> : <></>}
        {showAccountCreation ? <AccountCreation/> : <></>}
      </Wrapper>
    </ChakraProvider>
  );
}

export default App;
