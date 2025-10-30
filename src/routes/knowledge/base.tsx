import { Route, Routes } from 'react-router-dom';
import { KnowledgeContainer } from '@/features/Knowledge/Root/KnowledgeContainer';
import { NotFoundPresentational } from '@/features/Error/NotFound/NotFoundPresentational';

export const KnowledgeBaseRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<KnowledgeContainer />} />
      <Route path='*' element={<NotFoundPresentational />} />
    </Routes>
  );
};
