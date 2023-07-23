import {
  ChangeEvent, FC, memo, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    displayName: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    isReadonly?: boolean;
    options?: SelectOption[];
    selectedValue?: string;
    onChange?: (value: string) => void;
}

export const Select: FC<SelectProps> = memo((props: SelectProps) => {
  const {
    className, label, isReadonly, options, selectedValue, onChange,
  } = props;

  const optionsList = useMemo(() => options?.map((opt: SelectOption) => (
    <option key={opt.value} value={opt.value}>{opt.displayName}</option>
  )), [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.Select, {}, [className])}>
      { label && <label className={cls.selectLabel} htmlFor={label}>{label}</label> }
      <select
        onChange={onChangeHandler}
        value={selectedValue}
        className={cls.selectControl}
        name={label}
        id={label}
        disabled={isReadonly}
      >
        {optionsList}
      </select>
    </div>
  );
});
