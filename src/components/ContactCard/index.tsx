import React from 'react'
import { CardContent, Typography } from '@mui/material'
import { Contact } from 'redux/mainReducer'
import { useActions } from 'hooks'
import { CardContainer, EditContactIcon, DeleteContactIcon } from './styles'

const ContactCard: React.FC<Contact> = ({ name, phoneNumber, id }) => {
  // STATE ------------------------------------------------------------------>
  const { deleteContact } = useActions()

  // ICONS ------------------------------------------------------------------>
  const handleContactDeletion = () => {
    deleteContact(id)
  }
  const handleContactEditing = () => {
    //
  }

  return (
    <CardContainer>
      <EditContactIcon
        onClick={() => alert('editing')}
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
    </CardContainer>
  )
}

export default ContactCard
