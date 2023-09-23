import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView, ArticleViewSwitcher } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import cls from './ArticlesPage.module.scss';
import { articlesPageAction, articlesPageReducer, getArticles } from '../../model/slices/articlePageSlice';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);

  const isLoading = useSelector(getArticlesPageIsLoading);
  const currentView = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageAction.setView(view));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageAction.initState());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSwitcher className={cls.articleSwitcher} view={currentView} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          articles={articles}
          view={currentView}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
