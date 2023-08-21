import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../../model/types/profile';

describe('getProfileValidateErrors.test', () => {
  test('should return validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.NO_DATA],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.SERVER_ERROR, ValidateProfileError.NO_DATA]);
  });

  test('should return empty validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
