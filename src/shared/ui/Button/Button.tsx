import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    primary?: boolean;
    label?: string;
    size?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...additionalProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.Button, {}, [cls[theme], className])}
      {...additionalProps}
    >
      {children}
    </button>
  );
};
