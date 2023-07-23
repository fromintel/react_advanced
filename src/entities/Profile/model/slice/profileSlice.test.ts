import { profileActions, profileReducer, ProfileSchema } from 'entities/Profile';
import { Countries } from 'entities/Countries';
import { Currency } from 'entities/Currency';

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
});
