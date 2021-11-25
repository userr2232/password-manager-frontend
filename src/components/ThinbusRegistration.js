import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 35px 75px;
  height: 100vh;
  width: 100vw;
  background-color: ghostwhite;
  flex-direction: row;
`;

const rfc5054 = {
    N_base10: "21766174458617435773191008891802753781907668374255538511144643224689886235383840957210909013086056401571399717235807266581649606472148410291413364152197364477180887395655483738115072677402235101762521901569820740293149529620419333266262073471054548368736039519702486226506248861060256971802984953561121442680157668000761429988222457090413873973970171927093992114751765168063614761119615476233422096442783117971236371647333871414335895773474667308967050807005509320424799678417036867928316761272274230314067548291133582479583061439577559347101961771406173684378522703483495337037655006751328447510550299250924469288819",
    g_base10: "2", 
    k_base16: "5b9e8ef059c6b32ea59fc1d322d37f04aa30bae5aa9003b8321e21ddb04e300"
}

const createVerifier = () => {
    const form = document.getElementById('registration-form').value;
    const username = document.getElementById('username').value;
    console.log("username", username);

    const password = document.getElementById('verifier').value;
    console.log("password", password);

    const SRP6JavascriptClientSessionSHA256 = require('thinbus-srp/client.js')(rfc5054.N_base10, rfc5054.g_base10, rfc5054.k_base16);
    
    const srpClient = new SRP6JavascriptClientSessionSHA256();
    console.log("srpClient:", srpClient);
    
    const salt = srpClient.generateRandomSalt();
    console.log("salt:", salt);

    const verifier = srpClient.generateVerifier(salt, username, password);
    console.log("verifier:", verifier);

    document.getElementById('verifier').value = verifier;
    document.getElementById('salt').value = salt;
};

const ThinbusRegistration = () => {
    return (
    <Wrapper>
        <form action="/save" method="post" id="registration-form">
            username <input type="text" name="username" id="username"></input><br/>
            password <input type="text" name="verifier" id="verifier"></input><br/>
            salt <input type="text" name="salt" id="salt"></input>
            <button type="button" onClick={createVerifier}>Register</button>
        </form>
    </Wrapper>
    );
}

export default ThinbusRegistration;