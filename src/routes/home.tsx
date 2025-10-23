import { Route, Routes } from 'react-router-dom';
import { KnowledgeBaseRouter } from './knowledge/base';
import { HomeRootContainer } from '../features/Home/Root/HomeRootContainer';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeRootContainer />} />
      <Route path='/knowledge/*' element={<KnowledgeBaseRouter />} />
    </Routes>
  );
};
