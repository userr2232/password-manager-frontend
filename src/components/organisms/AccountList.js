import React, { useEffect } from 'react';
import styled from 'styled-components';
import AccountItem from '../molecules/AccountItem';
import AddAccount from '../molecules/AddAccount';
import PropTypes from 'prop-types';
import { apiUrl } from '../../config';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

// const courses = ["Facebook", "Gmail", "UTEC"];
// const usernames = ["bdiaz 22", "bdiaz 23", "xdxxdxdxddxd"]
// const passwords = ["asdasd", "asdasdasd", "dsfsdfgsfgd"]

const AccountList = props => {
    return (
        <Container>
            {props.accounts.map(account => <AccountItem key={account.id}
                site={account.site} username={account.username}
                password={account.password} strength={account.strength}
                lastModified={account.lastModified} created={account.created}
                accountSelector={props.accountSelector} />)}
            <AddAccount addAccount={() => { props.hideAccountDetails(); props.showAccountCreation(); }} />
        </Container>
    );
};

AccountList.propTypes = {
    accounts: PropTypes.array,
    hideAccountDetails: PropTypes.func,
    showAccountCreation: PropTypes.func
};

export default AccountList;