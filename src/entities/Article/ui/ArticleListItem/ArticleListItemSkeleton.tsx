import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
  ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo(
  (props: ArticleListItemSkeletonProps) => {
    const {
      className,
      view,
    } = props;

    if (view === ArticleView.LIST_ITEM) {
      return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
          <Card>
            <header className={cls.header}>
              <Skeleton border="50%" width={30} height={30} />
              <div className={cls.info}>
                <Skeleton width={150} height={16} />
                <Skeleton width={150} height={16} className={cls.date} />
              </div>
            </header>
            <Skeleton width={300} height={24} className={cls.title} />
            <Skeleton width={200} className={cls.img} />
            <footer className={cls.footer}>
              <Skeleton width={200} height={36} />
            </footer>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.imgWrapper}>
            <Skeleton width={200} height={200} className={cls.img} />
          </div>
          <div className={cls.info}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton width={150} height={16} />
        </Card>
      </div>
    );
  },
);
