import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article';
import ListIcon from 'shared/assets/icons/list_solid.svg';
import GridIcon from 'shared/assets/icons/grid_solid.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSwitcher.module.scss';

interface ArticleViewSwitcherProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.TILE,
    icon: GridIcon,
  },
  {
    view: ArticleView.LIST_ITEM,
    icon: ListIcon,
  },
];

export const ArticleViewSwitcher: FC<ArticleViewSwitcherProps> = memo((props: ArticleViewSwitcherProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSwitcher, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.OUTLINE}
          onClick={onClick(viewType.view)}
          disabled={viewType.view === view}
          className={classNames('', { [cls.selectedBtn]: viewType.view === view })}
        >
          <Icon
            className={classNames(cls.icon, { [cls.selected]: viewType.view === view })}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
});
