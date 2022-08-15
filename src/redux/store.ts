import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from 'redux/mainReducer'

export const store = configureStore({
  reducer: {
    main: contactsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
