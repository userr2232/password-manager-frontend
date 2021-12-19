import React, { useState } from 'react';
import styled from 'styled-components';
import AccountList from './organisms/AccountList'
import AccountCreation from './organisms/AccountCreation'
import AllDetails from './organisms/AllDetails'
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
    let { u } = useAuth()
    const navigate = useNavigate()
    const [_, setUser] = u
    
    const handleClick = () => {
      localStorage.removeItem("jwt")
      setUser(false)
      navigate('/login', { replace: true })
    }

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
    <>
      <Flex direction={'row-reverse'} paddingTop={'2em'} paddingRight={'2em'}>
        <Button onClick={handleClick}>Cerrar sesión</Button>
      </Flex>
      <Wrapper>
        <InnerWrapper>
          <Heading>Bienvenido</Heading>
          <h3 style={{margin: "40px auto"}}>Tus Cuentas</h3>
          <AccountList accountSelector={accountSelector} hideAccountDetails={() => setShowDetails(false)} showAccountCreation={() => setShowAccountCreation(true)}/>
        </InnerWrapper>
        {showDetails ? <AllDetails site={site} username={username} password={password} 
                    strength={strength} lastModified={lastModified} 
                    created={created}/> : <></>}
        {showAccountCreation ? <AccountCreation/> : <></>}
      </Wrapper>
    </>
    )
}

export default Home;