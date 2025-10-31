import { Route, Routes } from 'react-router-dom';
import { KnowledgeBaseRouter } from './knowledge/base';
import { HomeRootContainer } from '@/features/Home/Root/HomeRootContainer';
import { NotFoundPresentational } from '@/features/Error/NotFound/NotFoundPresentational';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeRootContainer />} />
      <Route path='/knowledge/*' element={<KnowledgeBaseRouter />} />
      <Route path='/*' element={<NotFoundPresentational />} />
    </Routes>
  );
};
