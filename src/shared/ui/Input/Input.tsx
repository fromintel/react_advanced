import React, {
  FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    isLazy?: boolean;
    readonly?: boolean;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type,
    placeholder,
    autoFocus,
    readonly,
    ...otherProps
  } = props;

  const [, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.Input, mods, [className])}>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.inputControl}
        placeholder={placeholder}
        readOnly={readonly}
        onFocus={onFocus}
        onBlur={onBlur}
        {...otherProps}
      />
    </div>
  );
});
