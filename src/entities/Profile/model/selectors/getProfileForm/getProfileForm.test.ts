import { StateSchema } from 'app/providers/StoreProvider';
import { Countries } from 'entities/Countries';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return profile form data', () => {
    const form = {
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
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
