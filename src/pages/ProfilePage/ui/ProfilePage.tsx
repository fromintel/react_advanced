import { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Countries';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const isReadonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorsTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('validation_server_error'),
    [ValidateProfileError.NO_DATA]: t('validation_no_data'),
    [ValidateProfileError.INCORRECT_AGE]: t('incorrect_age'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrect_user_data'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect_country'),
  };

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value?.replace(/\D/gi, '') || 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountries = useCallback((countries: Countries) => {
    dispatch(profileActions.updateProfile({ country: countries }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        { validateErrors?.length && validateErrors
          .map((err) => (
            <Text
              key={err}
              theme={TextTheme.ERROR}
              text={validateErrorsTranslates[err]}
            />
          ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          isReadonly={isReadonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountries={onChangeCountries}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
