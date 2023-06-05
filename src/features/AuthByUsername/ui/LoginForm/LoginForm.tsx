import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <form className="form-container">
        <div className={cls.formControls}>
          <Input
            type="text"
            autoFocus
            placeholder={t('username_placeholder')}
            className={cls.formInput}
          />
          <Input
            type="text"
            placeholder={t('password_placeholder')}
            className={cls.formInput}
          />
        </div>
        <div className={cls.formActions}>
          <Button className={cls.formBtn}>{t('login_btn')}</Button>
        </div>
      </form>
    </div>
  );
};
