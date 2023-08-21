import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
  test('should return readonly status', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isReadonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test('should return negative readonly status', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isReadonly: false,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
