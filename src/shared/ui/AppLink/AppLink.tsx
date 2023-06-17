import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { memo, PropsWithChildren, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = memo((props: PropsWithChildren<AppLinkProps>) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...additionalProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme], cls.offsetRight])}
      {...additionalProps}
    >
      {children}
    </Link>
  );
});
