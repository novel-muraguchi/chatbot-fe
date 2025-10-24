import { Avatar, Card, HStack, Text } from '@chakra-ui/react';

interface ChatFieldProps {
  message: string;
  isAnswer?: boolean;
}

export const ChatField = ({ message, isAnswer = false }: ChatFieldProps) => {
  return (
    <HStack w='100%' align='flex-start' justify='flex-start' mb='16px'>
      <Avatar.Root size='lg' bg={isAnswer ? '#a6c8f1' : 'gray.300'} color='white'>
        <Avatar.Fallback>{isAnswer ? 'AI' : ''}</Avatar.Fallback>
      </Avatar.Root>

      <Card.Root bg='#e9ebee' variant='subtle' borderRadius='lg' boxShadow='sm' maxW='70%'>
        <Card.Body py='10px' px='16px'>
          <Text fontSize='md' color='gray.800' whiteSpace='pre-wrap'>
            {message}
          </Text>
        </Card.Body>
      </Card.Root>
    </HStack>
  );
};
