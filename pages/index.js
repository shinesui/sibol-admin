import { getAuth } from 'firebase/auth'
import Head from 'next/head'
import Image from 'next/image'
import { useAuth } from '../lib/auth'
import styles from '../styles/Home.module.css'
import { Button, ButtonGroup, Code, Heading, Icon, Text, Flex } from '@chakra-ui/react'

export default function Home () {
  const getAuth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
      <title>Sibol</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />    
      </Head>

      <Icon color="black" name="logo" size="64px" />
      {getAuth.user ? (
        <Button as="a" href="/dashboard">
          View Dashboard
        </Button>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => getAuth.signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>    
  );
};
