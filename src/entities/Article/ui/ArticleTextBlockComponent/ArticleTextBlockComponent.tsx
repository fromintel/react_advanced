import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent:
    FC<ArticleTextBlockComponentProps> = memo(({ className }: ArticleTextBlockComponentProps) => {
      const { t } = useTranslation('article-details');

      return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
          <p>{t('article_text_block_component')}</p>
        </div>
      );
    });
