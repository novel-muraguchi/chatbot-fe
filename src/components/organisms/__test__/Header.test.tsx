import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { customRender } from '@/tests/helpers/customRender';
import { Header } from '@/components/organisms/Header';

describe('Header', () => {
  it('ヘッダーが正常に描画されること', () => {
    customRender(<Header />);

    const logoIcon = screen.getByAltText('Novel Guide');
    expect(logoIcon).toBeInTheDocument();
  });

  it('アイコンクリックでroot画面に遷移すること', () => {
    customRender(<Header />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
