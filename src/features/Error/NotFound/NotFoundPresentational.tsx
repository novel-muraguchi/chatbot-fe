import { Header } from '@/components/organisms/Header';
import { Box, Container, Stack } from '@chakra-ui/react';

export const NotFoundPresentational = () => {
  return (
    <>
      <Header />
      <Container>
        <Stack align='center' justify='center' minH='60vh'>
          <Box textAlign='center'>
            <Box fontSize='6xl' fontWeight='bold' color='#a9c9eb'>
              404
            </Box>
            <Box fontSize='2xl' mt={2}>
              Page Not Found
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
};
