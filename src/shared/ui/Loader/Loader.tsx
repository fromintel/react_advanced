import { FC } from 'react';
import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = () => (
  <div className={classNames('spinner-container')}>
    <div className={classNames('spinner-structure')}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
