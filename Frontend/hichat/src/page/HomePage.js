import React from 'react'
import { Box, Center, Container, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box d='flex' justifyContent="center" bg={'white'} p={3} w="100%" m="40px 0 15px 0" borderRadius="lg" borderWidth="1px">
        <Center><Text fontFamily="work sans" fontSize="4xl">Chat App</Text></Center>
      </Box>

      <Box display='flex' justifyContent="center" bg={'white'} p={3} w="100%" m="40px 0 15px 0" borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded'>
          <TabList>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default HomePage