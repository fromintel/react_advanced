import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string;
}

// This component only for testing application
export const BugButton: FC<BugButtonProps> = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const throwErrorHandler = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error('error');
    }
  }, [error]);

  return (
    <Button
      onClick={throwErrorHandler}
    >
      {t('throw_error_btn')}
    </Button>
  );
};
