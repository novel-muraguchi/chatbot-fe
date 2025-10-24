import { VStack, Box } from '@chakra-ui/react';
import { type ChatMessage } from '@/features/Home/Root/types/chatMessage';

interface QuestionHistoryProps {
  chatData: ChatMessage[] | undefined;
  setSelectedChatId: (id: number | null) => void;
}

export const QuestionHistory = ({ chatData = [], setSelectedChatId }: QuestionHistoryProps) => {
  return (
    <>
      <VStack overflowY={'auto'} h={'100%'} px='16px' py='12px' align='stretch'>
        {chatData.map((chat, index) => (
          <Box
            key={index}
            w={'100%'}
            p='5px 12px'
            borderRadius='8px'
            _hover={{ bg: '#c9dbef' }}
            cursor='pointer'
          >
            <Box
              p={1}
              onClick={() => {
                setSelectedChatId(chat.id);
              }}
            >
              {chat.question}
            </Box>
          </Box>
        ))}
      </VStack>
    </>
  );
};
