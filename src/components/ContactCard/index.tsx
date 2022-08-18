import React, { useState } from 'react'
import { CardContent, Typography } from '@mui/material'
import { Contact } from 'redux/mainReducer'
import { useActions } from 'hooks'
import ModalWindow from 'components/ModalWindow'
import { CardContainer, EditContactIcon, DeleteContactIcon } from './styles'

const ContactCard: React.FC<Contact> = ({ name, phoneNumber, id }) => {
  // STATE ------------------------------------------------------------------>
  const { deleteContact } = useActions()
  const { editContact, setEditedContactId } = useActions()
  const [isOpen, setIsOpen] = useState(false)

  // CONTROLS --------------------------------------------------------------->
  const handleClose = () => {
    setIsOpen(false)
  }
  const handleContactDeletion = () => {
    deleteContact(id)
  }
  const handleContactEditing = () => {
    setIsOpen(true)
    setEditedContactId(id)
  }
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber)
  }

  // JSX LOGIC -------------------------------------------------------------->
  return (
    <CardContainer
      onClick={handleCopyToClipboard} >
      <ModalWindow
        open={isOpen}
        actionOnClick={editContact}
        buttonText='edit'
        handleClose={handleClose}
      />
      <EditContactIcon
        onClick={handleContactEditing}
      />
      <DeleteContactIcon
        onClick={handleContactDeletion}
      />
      <CardContent>
        <Typography sx={{ fontSize: '10pt', color: 'gray' }}>
          {name}
        </Typography>
        <Typography>
          {phoneNumber}
        </Typography>
      </CardContent>
    </CardContainer >
  )
}

export default ContactCard
