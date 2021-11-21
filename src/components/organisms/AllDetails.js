import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const NormalLine = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
`;

const FieldName = styled.span`
    margin-right: 20px;
`

const AllDetails = props => {
    return(
        props.site ?
            <Container>
                <h2>{props.site}</h2>
                <NormalLine>
                    <FieldName>username</FieldName>
                    <span>{props.username}</span>
                </NormalLine>
                <NormalLine>
                    <FieldName>password</FieldName>
                    <span type="password">{props.password}</span>
                </NormalLine>
                <NormalLine>
                    <FieldName>last modified</FieldName>
                    <span>{props.lastModified}</span>
                </NormalLine>
                <NormalLine>
                    <FieldName>created</FieldName>
                    <span>{props.created}</span>
                </NormalLine>
            </Container>:
            <div></div>
    );
};

export default AllDetails;