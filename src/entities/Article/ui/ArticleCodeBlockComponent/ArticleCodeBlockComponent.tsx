import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent:
    FC<ArticleCodeBlockComponentProps> = memo(({ className }: ArticleCodeBlockComponentProps) => {
      const { t } = useTranslation('article-details');

      return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
          <p>{t('article_code_block_component')}</p>
        </div>
      );
    });
