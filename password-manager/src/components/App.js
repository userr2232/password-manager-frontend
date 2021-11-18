import React, { useState } from 'react';
import styled from 'styled-components';
import AccountList from './organisms/AccountList'
import AllDetails from './organisms/AllDetails'

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

  const accountSelector = details => {
    setSite(details.site);
    setUsername(details.username);
    setPassword(details.password);
    setStrength(details.strength);
    setLastModified(details.lastModified);
    setCreated(details.created);
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <h1>Bienvenido</h1>
        <h3 style={{margin: "40px auto"}}>Tus Cuentas</h3>
        <AccountList accountSelector={accountSelector}/>
      </InnerWrapper>
      <AllDetails site={site} username={username} password={password} 
                  strength={strength} lastModified={lastModified} 
                  created={created}/>
    </Wrapper>
  );
}

export default App;
