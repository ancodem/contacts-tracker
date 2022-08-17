import React, { useState } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { Button } from '@mui/material'
import { Contact } from 'redux/mainReducer'
import { useAppSelector } from 'hooks'
import ModalWindow from 'components/ModalWindow'
import ContactCard from 'components/ContactCard'
import ContactsContainenr from './styles'

const Contacts: React.FC = () => {

  // STATE ------------------------------------------------------------------>
  const contacts: Array<Contact> = useAppSelector(
    state => state.main.contactsList
  )

  // MODAL WINDOW CONTROLS -------------------------------------------------->
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <main>
      <Button
        onClick={handleOpen}
        variant="outlined">
        Add
      </Button>
      <ContactsContainenr>
        <ModalWindow open={open} handleClose={handleClose} />
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
