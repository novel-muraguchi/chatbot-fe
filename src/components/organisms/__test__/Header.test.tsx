import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@/App';
import { customRender } from '@/tests/helpers/customRender';
import { Header } from '@/components/organisms/Header';

describe('Header', () => {
  it('ヘッダーが正常に描画されること', () => {
    customRender(<Header />);

    const logoIcon = screen.getByAltText('Novel Guide');
    expect(logoIcon).toBeInTheDocument();
  });

  it('アイコンクリックでroot画面に遷移すること', async () => {
    window.history.pushState({}, '', '/dummy');
    const user = userEvent.setup();

    customRender(<App />);

    const logo = screen.getByAltText('Novel Guide');
    await user.click(logo);

    expect(await screen.findByText('Chat Page')).toBeInTheDocument();
  });
});
