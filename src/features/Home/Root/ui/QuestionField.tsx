import { Flex, Textarea, IconButton, Image } from '@chakra-ui/react';
import submitIcon from '@/assets/submit_icon.png';

export const QuestionField = () => {
  return (
    <Flex
      align='center'
      justify='space-between'
      bg='#e9ebee'
      borderRadius='24px'
      p='30px'
      boxShadow='inner'
      w='100%'
      maxW='1000px'
      mx='auto'
      mb='32px'
      gap='16px'
    >
      <Textarea
        resize='none'
        rows={3}
        border='none'
        bg='transparent'
        _focusVisible={{ boxShadow: 'none' }}
        fontSize='lg'
        flex='1'
        pr='12px'
      />
      <IconButton aria-label='送信' bg='transparent'>
        <Image src={submitIcon} alt='送信' w='40px' h='40px' display='block' pointerEvents='none' />
      </IconButton>
    </Flex>
  );
};
