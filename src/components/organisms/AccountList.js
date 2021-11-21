import React from 'react';
import styled from 'styled-components';
import AccountItem from '../molecules/AccountItem';
import AddAccount from '../molecules/AddAccount';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

// const courses = ["Facebook", "Gmail", "UTEC"];
// const usernames = ["bdiaz 22", "bdiaz 23", "xdxxdxdxddxd"]
// const passwords = ["asdasd", "asdasdasd", "dsfsdfgsfgd"]

const accounts = [
    {id: "1", site: "Facebook", username: "bdiaz22", password: "sdfsdfsd", strength: "low", lastModified: "today", created: "today"},
    {id: "2", site: "Gmail", username: "bdiaz23", password: "sdfsdfs", strength: "medium", lastModified: "yesterday", created: "yesterday"},
    {id: "3", site: "UTEC", username: "joe08", password: "aeaaaaa", strength: "secure", lastModified: "tomorrow", created: "tomorrow"}
]

const AccountList = props => {
    return(
        <Container>
            {accounts.map(account => <AccountItem key={account.id} 
                                                    site={account.site} username={account.username} 
                                                    password={account.password} strength={account.strength} 
                                                    lastModified={account.lastModified} created={account.created} 
                                                    accountSelector={props.accountSelector}/>)}
            <AddAccount addAccount={() => { props.hideAccountDetails(); props.showAccountCreation(); }}/>
        </Container>
    );
};

AccountList.propTypes = {
    hideAccountDetails: PropTypes.func,
    showAccountCreation: PropTypes.func
};

export default AccountList;