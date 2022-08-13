import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Contact {
  name: null | string
  phoneNumber: null | number
}
type StateType = Array<Contact>

const initialState: StateType = [
  { name: '', phoneNumber: null }
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
