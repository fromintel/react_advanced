import { StateSchema } from 'app/providers/StoreProvider';
import { Countries } from 'entities/Countries';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return profile data', () => {
    const data = {
      firstname: 'Anton',
      lastname: 'Zolotukhin',
      age: 27,
      country: Countries.UKRAINE,
      city: 'Hannover',
      currency: Currency.UAH,
      username: 'zoltan',
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
