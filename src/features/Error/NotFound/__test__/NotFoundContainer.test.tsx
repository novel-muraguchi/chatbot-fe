import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';

import { NotFoundContainer } from '../NotFoundContainer';
import { customRender } from '@/tests/helpers/customRender';
import * as Presentational from '../NotFoundPresentational';

vi.spyOn(Presentational, 'NotFoundPresentational').mockImplementation(() => (
  <div data-testid='mock-presentational'>Page Not Found</div>
));

describe('NotFoundContainer', () => {
  it('NotFoundPresentationalが表示されること', () => {
    customRender(<NotFoundContainer />);
    expect(screen.getByTestId('mock-presentational')).toBeInTheDocument();
  });
});
