import { Box, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/icon.png';

export const HEADER_HEIGHT = '64px';

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    void navigate('/');
  };

  return (
    <Box as='header' bg='#a9c9eb' px={4} py={1} h={HEADER_HEIGHT} display='flex' alignItems='center' boxShadow='md'>
      <Box
        as='button'
        onClick={handleNavigateHome}
        cursor='pointer'
        _hover={{ opacity: 0.8, transform: 'scale(1.03)' }}
        transition='all 0.2s'
        bg='transparent'
        border='none'
        p={0}
      >
        <Image src={icon} alt='Novel Guide' w='auto' h='120px' objectFit='contain'  _hover={{ opacity: 0.9 }} />
      </Box>
    </Box>
  );
};
