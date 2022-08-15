import React from 'react'
import { CardContent, Typography } from '@mui/material'
import { Contact } from 'redux/mainReducer'
import CardContainer from './styles'

const ContactCard: React.FC<Contact> = ({ name, phoneNumber }) => (
  <CardContainer>
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
