import {
  ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'back groundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    isSquare?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    isSquare,
    size = ButtonSize.M,
    disabled,
    ...additionalProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[size]]: true,
    [cls.square]: isSquare,
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      {...additionalProps}
    >
      {children}
    </button>
  );
});
