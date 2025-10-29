import { Route, Routes } from 'react-router-dom';
import { KnowledgeContainer } from '@/features/Knowledge/Root/KnowledgeContainer';

export const KnowledgeBaseRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<KnowledgeContainer />} />
    </Routes>
  );
};
