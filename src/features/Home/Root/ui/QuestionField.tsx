import { Card, Flex, Textarea, IconButton, Image } from '@chakra-ui/react';
import submitIcon from '@/assets/submit_icon.png';

export const QuestionField = () => {
  return (
    <>
      <Card.Root
        variant='subtle'
        w='100%'
        maxW='1300px'
        mx='auto'
        bg='#e9ebee'
        borderRadius='24px'
        boxShadow='md'
        mb='32px'
      >
        <Card.Body>
          <form>
            <Flex align='center' gap='16px'>
              <Textarea
                name='question'
                placeholder='質問を入力してください...'
                resize='none'
                border='none'
                borderRadius='16px'
                _focusVisible={{ boxShadow: 'outline' }}
                fontSize='lg'
                flex='1'
                h={'100px'}
                p='18px'
                lineHeight='1.6'
              />
              <IconButton
                aria-label='送信'
                type='submit'
                bg='transparent'
                _hover={{ transform: 'scale(1.1)', bg: 'transparent' }}
                transition='all 0.2s'
              >
                <Image
                  src={submitIcon}
                  alt='送信'
                  w='44px'
                  h='44px'
                  display='block'
                  pointerEvents='none'
                />
              </IconButton>
            </Flex>
          </form>
        </Card.Body>
      </Card.Root>
    </>
  );
};
