import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
  test('should success login', async () => {
    const userData = { username: 'username', id: '123' };
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
    const result = await thunk.callThunk({ username: '1234', password: '1234' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('should receive error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '1234', password: '1234' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('error');
  });
});
