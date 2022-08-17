import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Contact {
  name: null | string
  phoneNumber: null | string
}

interface StateType {
  contactInput: Contact
  contactsList: Array<Contact>
}

const initialState: StateType = {
  contactInput: {
    name: '',
    phoneNumber: '',
  },
  contactsList: [
    { name: 'John Doe', phoneNumber: '333-555-321' },
    { name: 'Tu Pac', phoneNumber: '234-1234-234' },
    { name: 'Basta Rhymes', phoneNumber: '324-123-567' },
    { name: 'LeBron James', phoneNumber: '456-345-265' },
    { name: 'Marshal Matters', phoneNumber: '678-5634-12' },
  ]
}

const contactsSlice = createSlice({
  name: 'contacts-main-slice',
  initialState,
  reducers: {
    addContact: (state) => {
      state.contactsList.push({ ...state.contactInput })
      // eslint-disable-next-line
      state.contactInput.name = initialState.contactInput.name
      // eslint-disable-next-line
      state.contactInput.phoneNumber = initialState.contactInput.phoneNumber
    },
    deleteContact: (state, action: PayloadAction<Contact>) => {
      const contactToBeDeleted = state.contactsList.indexOf(action.payload)
      state.contactsList.splice(contactToBeDeleted, 1)
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const contactToBeEdited = state.contactsList.indexOf(action.payload)
      state.contactsList.splice(
        contactToBeEdited,
        1,
        { ...state.contactInput },
      )
    },
    changeNameInput: (
      state, action: PayloadAction<string>) => {
      // eslint-disable-next-line
      state.contactInput.name = action.payload
    },
    changePhoneInput: (
      state, action: PayloadAction<string>) => {
      // eslint-disable-next-line
      state.contactInput.phoneNumber = action.payload
    }
  }
})

export const allActions = contactsSlice.actions

export default contactsSlice.reducer
