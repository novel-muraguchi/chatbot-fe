import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Header, HEADER_HEIGHT } from '@/components/organisms/Header';
import newChatIcon from '@/assets/new_chat_icon.png';

export const HomeRootPresentational = () => {
  return (
    <Box minH='100vh' bg='#e5ebf1'>
      <Header />
      <Flex
        as='main'
        h={`calc(100vh - ${HEADER_HEIGHT})`}
        bg='#fafdff'
        boxShadow='xl'
        overflow='hidden'
      >
        <Box w='280px' bg='#d7e6f5' borderRight='1px solid #b4c7d9' display='flex' flexDir='column'>
          <Flex
            align='center'
            gap='12px'
            px='20px'
            py='40px'
            cursor='pointer'
            _hover={{ bg: '#c9dbef' }}
            transition='background-color 0.2s ease'
          >
            <Image src={newChatIcon} alt='New Chat' boxSize='32px' objectFit='contain' />
            <Text fontWeight='semibold' fontSize='20px' color='#3a4b5d'>
              New Chat
            </Text>
          </Flex>
          <Box px='20px' py='16px' borderBottom='1px solid #a9bcd0'>
            <Text fontSize='lg' fontWeight='medium' color='#3a4b5d' letterSpacing='wide'>
              Chat
            </Text>
          </Box>
        </Box>
        <Box flex='1' bg='white' />
      </Flex>
    </Box>
  );
};
