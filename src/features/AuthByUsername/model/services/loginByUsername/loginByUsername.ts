import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
    >(
      'login/loginByUsername',
      async (loginData, thunkApi) => {
        const { extra, rejectWithValue, dispatch } = thunkApi;
        try {
          const response = await extra.api.post<User>('/login', loginData);

          if (!response.data) {
            throw new Error('Server has returned the error...');
          }

          localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
          dispatch(userActions.setAuthData(response.data));

          return response.data;
        } catch (e) {
          return rejectWithValue('error');
        }
      },
    );
