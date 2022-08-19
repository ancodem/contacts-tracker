import React, { useState } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { Autocomplete, Fab, TextField } from '@mui/material'
import { Contact } from 'redux/mainReducer'
import { useActions, useAppSelector } from 'hooks'
import ModalWindow from 'components/ModalWindow'
import ContactCard from 'components/ContactCard'
import { ContactsContainenr } from './styles'

const Contacts: React.FC = () => {

  // STATE ------------------------------------------------------------------>
  const contacts: Array<Contact> = useAppSelector(
    state => state.main.contactsList
  )
  const { addContact } = useActions()

  // MODAL WINDOW CONTROLS -------------------------------------------------->
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <main>
      <Autocomplete
        freeSolo
        autoHighlight
        options={contacts.map((contact) => contact.name)}
        renderInput={
          (params) =>
            <TextField
              {...params}
              label="Поиск контактов"
            />
        }
        sx={{
          width: '40%',
          margin: '20px auto',
        }}
      />
      <Fab
        variant="extended"
        onClick={handleOpen}
        color="primary" aria-label="add"
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}
      >
        add contact
      </Fab>
      <ContactsContainenr>
        <ModalWindow
          open={open}
          handleClose={handleClose}
          buttonText='Add'
          actionOnClick={addContact}
        />
        {contacts.map((contact: Contact): ReactJSXElement =>
          <ContactCard
            key={contact.id}
            id={contact.id}
            name={contact.name}
            phoneNumber={contact.phoneNumber}
          />
        )}
      </ContactsContainenr>
    </main>
  )
}
export default Contacts
