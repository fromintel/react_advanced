import { FC, lazy } from 'react';
import { AddCommentFormProps } from './addCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));
