import { Container, Text } from '@chakra-ui/react';
import { Header, HEADER_HEIGHT } from '@/components/organisms/Header';

export const HomeRootPresentational = () => {
  return (
    <>
      <Header />
      <Container maxW='full' px={0} h={`calc(100vh - ${HEADER_HEIGHT})`} bg='#fafdff' mt={0}>
        <Text>Chat Page</Text>
      </Container>
    </>
  );
};
