import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Countries, CountriesSelect } from 'entities/Countries';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isReadonly?: boolean;
    isLoading?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountries?: (value: Countries) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
  const {
    data,
    isLoading,
    isReadonly,
    error,
    className,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountries,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('error_placeholder_profile')}
          text={t('refresh_page_notification')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.edit]: !isReadonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.content}>
        { data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} altImg={t('avatar_alt')} />
          </div>
        ) }
        <div className={cls.form}>
          <div className={cls.formControl}>
            <Input
              value={data?.firstname}
              placeholder={t('enter_your_name')}
              onChange={onChangeFirstname}
              readonly={isReadonly}
            />
          </div>
          <div className={cls.formControl}>
            <Input
              value={data?.lastname}
              placeholder={t('enter_your_lastname')}
              onChange={onChangeLastname}
              readonly={isReadonly}
            />
          </div>
          <div className={cls.formControl}>
            <Input
              value={data?.age}
              placeholder={t('enter_your_age')}
              onChange={onChangeAge}
              readonly={isReadonly}
            />
          </div>
          <div className={cls.formControl}>
            <Input
              value={data?.city}
              placeholder={t('enter_your_city')}
              onChange={onChangeCity}
              readonly={isReadonly}
            />
          </div>
          <div className={cls.formControl}>
            <Input
              value={data?.username}
              placeholder={t('enter_your_username')}
              onChange={onChangeUsername}
              readonly={isReadonly}
            />
          </div>
          <div className={cls.formControl}>
            <Input
              value={data?.avatar}
              placeholder={t('enter_the_link_on_avatar')}
              onChange={onChangeAvatar}
              readonly={isReadonly}
            />
          </div>
          <div className={cls.formControl}>
            <CurrencySelect
              selectedValue={data?.currency}
              onChange={onChangeCurrency}
              isReadonly={isReadonly}
            />
          </div>
          <div className={cls.formControl}>
            <CountriesSelect
              selectedValue={data?.country}
              onChange={onChangeCountries}
              isReadonly={isReadonly}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
