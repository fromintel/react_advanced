import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const isReadonlyProfile = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEditProfile = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEditProfile = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveEditProfile = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text text={t('profile_title')} />
      <div className={cls.profileActions}>
        { canEdit && (
          <div>
            {
              isReadonlyProfile
                ? (
                  <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditProfile}
                  >
                    {t('edit_profile')}
                  </Button>
                )
                : (
                  <>
                    <Button
                      className={cls.declineBtn}
                      theme={ButtonTheme.OUTLINE_RED}
                      onClick={onCancelEditProfile}
                    >
                      {t('decline_changes_profile')}
                    </Button>
                    <Button
                      className={cls.saveBtn}
                      theme={ButtonTheme.OUTLINE}
                      onClick={onSaveEditProfile}
                    >
                      {t('save_changes_profile')}
                    </Button>
                  </>
                )
            }
          </div>
        ) }
      </div>
    </div>
  );
};
