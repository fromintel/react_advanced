import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slices/counterSlice';

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h1 data-testid="title-value">
        Counter value:
        {counterValue}
      </h1>
      <Button
        data-testid="increment-btn"
        onClick={increment}
      >
        { t('increment_btn') }
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={decrement}
      >
        { t('decrement_btn') }
      </Button>
    </div>
  );
};
