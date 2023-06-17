import React, {
  FC, memo, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => (
    SidebarItemsList.map((item) => (
      <SidebarItem item={item} collapsed={collapsed} key={item.path} />
    ))
  ), [collapsed]);

  return (
    <div
      className={classNames(
        cls.Sidebar,
        { [cls.collapsed]: collapsed },
        [className],
      )}
      data-testid="sidebar"
    >
      <Button
        onClick={onToggle}
        data-testid="toggle_sidebar"
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        isSquare
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {itemsList}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher isShort={collapsed} className={cls.lang} />
      </div>
    </div>
  );
});
