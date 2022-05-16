import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Typography } from '../Typography';

describe('<Typography />', () => {
  const children = 'Typography';

  it('should render a children', () => {
    render(<Typography>{children}</Typography>);

    expect(screen.getByText(children)).toBeDefined();
  });
});