import { Card, Container, CardContent, Typography } from '@mui/material'
import { useAppSelector } from 'hooks'
import { Contact } from 'redux/mainReducer'
import React from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

const Contacts: React.FC = () => {
  const contacts: Array<Contact> = useAppSelector(
    state => state.contacts
  )
  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      padding: '40px',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {contacts.map((contact: Contact): ReactJSXElement =>
        <Card key={contact.name}
          sx={{
            width: '10em',
            marginTop: '20px',
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: '10pt', color: 'gray' }}>
              {contact.name}
            </Typography>
            <Typography>
              {contact.phoneNumber}
            </Typography>

          </CardContent>
        </Card>
      )}
    </Container>
  )
}
export default Contacts
