import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Contact {
  name: null | string
  phoneNumber: null | string
}
type StateType = Array<Contact>

const initialState: StateType = [
  { name: 'John Doe', phoneNumber: '333-555-321' },
  { name: 'Tu Pac', phoneNumber: '234-1234-234' },
  { name: 'Basta Rhymes', phoneNumber: '324-123-567' },
  { name: 'LeBron James', phoneNumber: '456-345-265' },
  { name: 'Marshal Matters', phoneNumber: '678-5634-12' },
]
const contactsSlice = createSlice({
  name: 'contacts-main-slice',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload)
    },
  }
})

export const { addContact } = contactsSlice.actions

export default contactsSlice.reducer
