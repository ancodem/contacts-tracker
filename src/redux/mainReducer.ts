import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Contact {
  name: null | string
  phoneNumber: null | string
}
type StateType = Array<Contact>

const initialState: StateType = [
  { name: 'John Doe', phoneNumber: '333-555-321' },
  { name: 'John Doe', phoneNumber: '333-555-321' },
  { name: 'John Doe', phoneNumber: '333-555-321' },
  { name: 'John Doe', phoneNumber: '333-555-321' },
  { name: 'John Doe', phoneNumber: '333-555-321' },
]
const contactsSlice = createSlice({
  name: 'contacts-main-slice',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.concat(action.payload)
    },
  }
})

export const { addContact } = contactsSlice.actions

export default contactsSlice.reducer
