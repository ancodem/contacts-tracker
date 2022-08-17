import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Contact {
  id: number
  name: null | string
  phoneNumber: null | string
}

interface StateType {
  isEditMode: boolean
  contactInput: Contact
  contactsList: Array<Contact>
}

const initialState: StateType = {
  isEditMode: false,
  contactInput: {
    id: 0,
    name: '',
    phoneNumber: '',
  },
  contactsList: [
    { id: 1, name: 'John Doe', phoneNumber: '333-555-321' },
    { id: 2, name: 'Tu Pac', phoneNumber: '234-1234-234' },
    { id: 3, name: 'Basta Rhymes', phoneNumber: '324-123-567' },
    { id: 4, name: 'LeBron James', phoneNumber: '456-345-265' },
    { id: 5, name: 'Marshal Matters', phoneNumber: '678-5634-12' },
  ]
}

const contactsSlice = createSlice({
  name: 'contacts-main-slice',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<number>) => {
      state.contactsList.push({
        ...state.contactInput,
        id: action.payload,
      })
      // eslint-disable-next-line
      state.contactInput.name = initialState.contactInput.name
      // eslint-disable-next-line
      state.contactInput.phoneNumber = initialState.contactInput.phoneNumber
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      const contactToDelete = state.contactsList.findIndex(
        contact => contact.id === action.payload
      )
      state.contactsList.splice(contactToDelete, 1)
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
