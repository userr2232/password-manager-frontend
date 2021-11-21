import React, { useState } from 'react';
import styled from 'styled-components';

import {
    Flex, Box, Heading, FormControl, FormLabel,
    Input, Button, List, ListItem, ListIcon, useColorMode,
    Alert, AlertIcon, AlertTitle, AlertDescription,
    Text
} from '@chakra-ui/react';
import { useForm, useFieldArray, Controller } from "react-hook-form";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`-=[];';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

const AccountCreation = (props) => {
    const [submitted, setSubmitted] = useState(false);
    const [securePassword, setSecurePassword] = useState("");

    const generatePassword = () => {
        setSecurePassword(makeid(20));
    };    

    const initialValues = {
        username: '',
        password: ''
    };

    const { control, register, handleSubmit, reset, trigger, setError, formState } = useForm({
        defaultValues: initialValues
    });

    const handleAccountAddition = async data => {
        
    }

    return (
        <Flex width="100%" justifyContent="center">
            <Box p={2} width={"90%"}>
                <Box textAlign="center">
                    <Heading as={'h3'} size={'lg'}>Agrega una cuenta</Heading>
                </Box>
                <Box p={8} width={"100%"} borderWidth={1} borderRadius={8} boxShadow={"lg"}>
                    <Box>
                        <form onSubmit={handleSubmit(async data => { handleAccountAddition(data); reset(initialValues); })}>
                            <Box>
                                <FormControl p={2} isRequired>
                                    <FormLabel display={'flex'} as={'legend'} alignItems={'center'}>
                                        Username
                                    </FormLabel>
                                    <Input name={'username'} placeholder={'Username'}/>
                                </FormControl>
                            </Box>
                            <FormControl isRequired>
                                <FormLabel display={'flex'} as={'legend'} alignItems={'center'}>
                                    Password
                                </FormLabel>
                                <Input name={'password'} placeholder={'Password'} value={securePassword} type={'password'}/>
                            </FormControl>
                            <Button onClick={generatePassword}>
                                Genera una contraseña segura
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

export default AccountCreation;