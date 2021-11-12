import { useEffect } from 'react';
import { ActionCreator } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFetching = (actionCreator: ActionCreator<any>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionCreator());
  }, []);
};
