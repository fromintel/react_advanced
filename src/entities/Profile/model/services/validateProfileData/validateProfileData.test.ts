import { Countries } from 'entities/Countries';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
  firstname: 'Anton',
  lastname: 'Zolotukhin',
  age: 27,
  country: Countries.UKRAINE,
  city: 'Hannover',
  currency: Currency.UAH,
  username: 'zoltan',
};

describe('validateProfileData.test', () => {
  test('should receive empty array of errors', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('should receive error about firstname and lastname', async () => {
    const result = validateProfileData({ ...data, firstname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('should receive error about age', async () => {
    const result = validateProfileData({ ...data, age: 0 });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('should receive error about country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('should receive errors about age and user data', async () => {
    const result = validateProfileData({ ...data, age: undefined, lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE]);
  });

  test('should receive all errors', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY]);
  });
});
