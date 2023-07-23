import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Countries } from '../../model/types/countries';

interface CountriesSelectProps {
    className?: string;
    selectedValue?: Countries;
    onChange?: (value: Countries) => void;
    isReadonly?: boolean;
}

const options = [
  { value: Countries.USA, displayName: Countries.USA },
  { value: Countries.GERMANY, displayName: Countries.GERMANY },
  { value: Countries.UKRAINE, displayName: Countries.UKRAINE },
];

export const CountriesSelect: FC<CountriesSelectProps> = memo(
  ({
    className, selectedValue, onChange, isReadonly,
  }: CountriesSelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Countries);
    }, [onChange]);

    return (
      <Select
        className={classNames('', {}, [className])}
        label={t('enter_countries')}
        options={options}
        selectedValue={selectedValue}
        onChange={onChangeHandler}
        isReadonly={isReadonly}
      />
    );
  },
);
