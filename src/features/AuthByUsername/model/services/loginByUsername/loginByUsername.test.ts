import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
  test('should success login', async () => {
    const userData = { username: 'username', id: '123' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '1234', password: '1234' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('should receive error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '1234', password: '1234' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('error');
  });
});
