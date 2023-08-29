import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent:
    FC<ArticleImageBlockComponentProps> = memo(({ className }: ArticleImageBlockComponentProps) => {
      const { t } = useTranslation('article-details');

      return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
          <p>{t('article_image_block_component')}</p>
        </div>
      );
    });
