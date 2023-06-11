import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const performLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <header className={cls.formHeader}>
        <Text title={t('login_form_title')} />
      </header>
      <form className="form-container">
        <div className={cls.formControls}>
          <Input
            type="text"
            autoFocus
            placeholder={t('username_placeholder')}
            className={cls.formInput}
            onChange={onChangeUsername}
            value={username}
          />
          <Input
            type="text"
            placeholder={t('password_placeholder')}
            className={cls.formInput}
            onChange={onChangePassword}
            value={password}
          />
        </div>
        {error && <Text text={t('login_error_incorrect_credentials')} theme={TextTheme.ERROR} />}
        <div className={cls.formActions}>
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={performLogin}
            disabled={isLoading}
          >
            {t('login_btn')}
          </Button>
        </div>
      </form>
    </div>
  );
});
