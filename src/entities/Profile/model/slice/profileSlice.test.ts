import {
  profileActions, profileReducer, ProfileSchema, updateProfileData,
} from 'entities/Profile';
import { Countries } from 'entities/Countries';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

const data = {
  firstname: 'Anton',
  lastname: 'Zolotukhin',
  age: 27,
  country: Countries.UKRAINE,
  city: 'Hannover',
  currency: Currency.UAH,
  username: 'zoltan',
};

describe('profileSlice.test', () => {
  test('should successfully set true for readonly state', () => {
    const state: DeepPartial<ProfileSchema> = { isReadonly: false };
    expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
    )).toEqual({ isReadonly: true });
  });

  test('should cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit(),
    )).toEqual({
      isReadonly: true, data, form: data,
    });
  });

  test('should update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: 'username' } };
    expect(profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: 'updatedUsername' }),
    )).toEqual({
      form: { username: 'updatedUsername' },
    });
  });

  test('should update profile in pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test('should update profile in fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      isReadonly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
