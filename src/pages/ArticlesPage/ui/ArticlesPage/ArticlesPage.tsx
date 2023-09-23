import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }: ArticlesPageProps) => (
  <div className={classNames(cls.ArticlesPage, {}, [className])}>
    <ArticleList
      isLoading
      articles={[]}
      view={ArticleView.LIST_ITEM}
    />
  </div>
);

export default memo(ArticlesPage);
