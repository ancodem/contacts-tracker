import { Card, Container, CardContent, Typography, Button } from '@mui/material'
import { useAppSelector } from 'hooks'
import { Contact } from 'redux/mainReducer'
import React, { useState } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import ModalWindow from 'components/ModalWindow'

const Contacts: React.FC = () => {
  const contacts: Array<Contact> = useAppSelector(
    state => state.contacts
  )

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      padding: '40px',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Button
        onClick={handleOpen}
        variant="outlined">
        Add
      </Button>
      <ModalWindow open={open} handleClose={handleClose} />
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
