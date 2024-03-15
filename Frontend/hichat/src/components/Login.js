import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatState } from '../Context/ChatProvider';
import axios from 'axios';

const Login = () => {
    const [show, setShow] = useState(false);
    const toast = useToast();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { setUser } = ChatState();

    const handleClick = () => {
        setShow(!show)
    }

    const handleLogin = async () => {
        setLoading(true);
        if (!email || !password) {
            toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/user/login",
                { email, password },
                config
            );

            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setUser(data);
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            navigate("/chats");
        } catch (error) {
            toast({
                title: "Error Occured!",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
        }
    };

    return (
        <VStack>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='text' isRequired onChange={(e) => setEmail(e.target.value)}></Input>
            </FormControl>

            <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={show ? "text" : "password"} isRequired onChange={(e) => setPassword(e.target.value)}></Input>
                    <InputRightElement width='4.5rem'>
                        <Button h="1.5rem" w="2rem" onClick={handleClick}>
                            show
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button width='100%' colorScheme='blue' onClick={handleLogin}>
                Login
            </Button>

            <Button width='100%' colorScheme='red' onClick={() => { setEmail('hari@gmail.com'); setPassword('1234') }}>
                Get User Credentials
            </Button>

        </VStack>
    )
}

export default Login