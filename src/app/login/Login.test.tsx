import React from 'react';

import { render } from 'tests';

import { Login } from './Login';

describe('Login', () => {
  test('Displays all information', async () => {
    const { getByText, getByLabelText } = render(<Login />);

    expect(getByText('join.tsh.io')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByLabelText('Username')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Forgot password?')).toBeInTheDocument();
  });
});
