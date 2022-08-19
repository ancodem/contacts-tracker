import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from 'redux/store'
import { bindActionCreators } from 'redux'
import { allActions } from 'redux/mainReducer'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(allActions, dispatch)
}

