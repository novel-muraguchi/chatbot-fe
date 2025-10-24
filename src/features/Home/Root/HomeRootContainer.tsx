import { useState } from 'react';
import { HomeRootPresentational } from './HomeRootPresentational';

export const HomeRootContainer = () => {
  const chatData = [
    { id: 1, question: 'これは1つ目の質問です。', answer: 'これは1つ目の回答です。' },
    { id: 2, question: 'これは2つ目の質問です。', answer: 'これは2つ目の回答です。' },
  ];
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

  return (
    <HomeRootPresentational
      chatData={chatData}
      selectedChatId={selectedChatId}
      setSelectedChatId={setSelectedChatId}
    />
  );
};
