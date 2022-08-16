import React from 'react'
import { CardContent, Typography } from '@mui/material'
import { Contact } from 'redux/mainReducer'
import { CardContainer, EditContactIcon, DeleteContactIcon } from './styles'

const ContactCard: React.FC<Contact> = ({ name, phoneNumber }) => (
  <CardContainer>
    <EditContactIcon />
    <DeleteContactIcon />
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

export default ContactCard
