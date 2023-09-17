import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';

describe('articleDetails', () => {
  test('should return details data', () => {
    const data = {
      id: '',
      title: 'test',
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: {
          id: '',
          title: 'test',
        },
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('should return article error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBeTruthy();
  });

  test('should return the active loading of article', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });
});
