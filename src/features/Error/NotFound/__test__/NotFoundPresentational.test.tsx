import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

import { NotFoundPresentational } from '../NotFoundPresentational';
import { customRender } from '@/tests/helpers/customRender';

describe('NotFoundPresentational', () => {
  it('Page Not Found が表示されること', () => {
    customRender(<NotFoundPresentational />);
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });
});
