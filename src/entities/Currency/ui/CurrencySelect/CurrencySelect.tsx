import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    selectedValue?: Currency;
    onChange?: (value: Currency) => void;
    isReadonly?: boolean;
}

const options = [
  { value: Currency.EUR, displayName: Currency.EUR },
  { value: Currency.UAH, displayName: Currency.UAH },
  { value: Currency.USD, displayName: Currency.USD },
];

export const CurrencySelect: FC<CurrencySelectProps> = memo(
  ({
    className, selectedValue, onChange, isReadonly,
  }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Currency);
    }, [onChange]);

    return (
      <Select
        className={classNames('', {}, [className])}
        label={t('enter_currency')}
        options={options}
        selectedValue={selectedValue}
        onChange={onChangeHandler}
        isReadonly={isReadonly}
      />
    );
  },
);
