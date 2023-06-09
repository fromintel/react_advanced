import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import {
  getProfileIsLoading,
} from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text text={t('profile_title')} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t('edit_profile')}</Button>
      </div>
      <div className={cls.content}>
        <div className={cls.form}>
          <div className={cls.formControl}>
            <Input
              value={data?.firstname}
              placeholder={t('enter_your_name')}
            />
          </div>
          <div className={cls.formControl}>
            <Input
              value={data?.lastname}
              placeholder={t('enter_your_lastname')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
