import React from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button,
  Flex,
  Link,
  Avatar,
  Icon,
  Code,
  Text
} from '@chakra-ui/react';

import { useAuth } from '../lib/auth';
import { getAuth } from 'firebase/auth';
import AddSiteModal from './AddSiteModal';

const linebreak = '\n';
const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex backgroundColor="white" mb={16} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
        >
          <Flex>
            <Icon name="logo" size="24px" mr={8} />
            <Link mr={4}>Sites</Link>
            <Link>Feedback</Link>
          </Flex>
          <Flex justifyContent="center" alignItems="center" display="inline">
          {user && (
            <Button colorScheme='teal' variant="solid" mr={10} onClick={() => signout()}>
              Log Out
            </Button>
            )}
            <Avatar size="sm"
            display="inline-block" src={user?.photoUrl} />
            <div class="break"></div>
            <Text>
                Current user: <Code>{user ? user.name : 'None'}</Code>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-between">
          <Heading mb={8}>My Sites</Heading>
          <AddSiteModal>+ Add Site</AddSiteModal>
        </Flex>
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;