import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('should correct set password', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };
    expect(loginReducer(
        state as LoginSchema,
        loginActions.setUsername('12345'),
    )).toEqual({ username: '12345' });
  });
  test('should correct set username', () => {
    const state: DeepPartial<LoginSchema> = { password: 'password' };
    expect(loginReducer(
        state as LoginSchema,
        loginActions.setPassword('newPass'),
    )).toEqual({ password: 'newPass' });
  });
});
