import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { random_str } from '../../utils';

import {
    Flex, Box, Heading, FormControl, FormLabel,
    Input, Button, List, ListItem, ListIcon, useColorMode,
    Alert, AlertIcon, AlertTitle, AlertDescription,
    Text, InputGroup, InputRightElement
} from '@chakra-ui/react';
import { useForm, useFieldArray, Controller, useFormState } from "react-hook-form";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const AccountCreation = (props) => {
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show)


    const { control, register, handleSubmit, reset, trigger, setError } = useForm({
        defaultValues: { site: '', username: '', password: (() => random_str(20))() }
    });

    const { isSubmitting, isSubmitSuccessful } = useFormState({
        control
      });

    useEffect(() => {
        if(isSubmitSuccessful) {
            console.log("successful")
            console.log("resetting")
            reset();
        }
        else {
            console.log("not successful");
        }
    }, [isSubmitting]);

    const handleAccountAddition = async data => {
        props.addToListAndCreate(data);
    }

    return (
        <Flex width="100%" justifyContent="center">
            <Box p={2} width={"90%"}>
                <Box textAlign="center">
                    <Heading as={'h3'} size={'lg'}>Agrega una cuenta</Heading>
                </Box>
                <Box p={8} width={"100%"} borderWidth={1} borderRadius={8} boxShadow={"lg"}>
                    <Box>
                        <form onSubmit={handleSubmit(handleAccountAddition)}>
                            <FormControl p={2} isRequired>
                                <FormLabel display={'flex'} as={'legend'} alignItems={'center'}>
                                    Site
                                </FormLabel>
                                <Input {...register("site", {required: true})} name={'site'} placeholder={'site'}/>
                            </FormControl>
                            <FormControl p={2} isRequired>
                                <FormLabel display={'flex'} as={'legend'} alignItems={'center'}>
                                    Username
                                </FormLabel>
                                <Input {...register("username", {required: true})} name={'username'} placeholder={'Username'}/>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel display={'flex'} as={'legend'} alignItems={'center'}>
                                    Password
                                </FormLabel>
                                <InputGroup>
                                    <Input {...register("password", {required: true})} name={'password'} placeholder={'Password'} type={show ? 'text' : 'password'} defaultValue={random_str(20)}/>
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={toggleShow}>
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button 
                                    marginTop={"1rem"}
                                    display={"block"}
                                    style={{marginLeft: "auto", marginRight: 0}}
                                    isLoading={isSubmitting}
                                    loadingText={"Enviando"} variant={"outline"}
                                    type={"submit"}
                                    size={'lg'}>Enviar</Button>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

export default AccountCreation;