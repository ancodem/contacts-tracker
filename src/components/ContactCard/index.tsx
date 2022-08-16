import React from 'react'
import { CardContent, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { Contact } from 'redux/mainReducer'
import CardContainer from './styles'

const ContactCard: React.FC<Contact> = ({ name, phoneNumber }) => (
  <CardContainer>
    <EditIcon
      sx={{
        position: 'absolute',
        right: '1px',
        bottom: '1px',
        alignSelf: 'flex-end',
        borderRadius: '20px',
        padding: '3px',
        color: 'gray',
        '&:hover': {
          color: 'blue'
        }
      }}
    />
    <HighlightOffIcon
      sx={{
        position: 'absolute',
        right: '1px',
        top: '-1px',
        alignSelf: 'flex-end',
        borderRadius: '20px',
        padding: '3px',
        color: 'gray',
        '&:hover': {
          color: 'blue'
        }
      }}
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

export default ContactCard
