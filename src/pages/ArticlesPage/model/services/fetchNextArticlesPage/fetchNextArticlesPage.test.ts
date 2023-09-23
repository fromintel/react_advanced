import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlePage.test', () => {
  test('should success fetch articles data', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        entities: {},
        ids: [],
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toBeCalledWith({ page: 3 });
  });

  test('should not fetch articles data', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        entities: {},
        ids: [],
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
