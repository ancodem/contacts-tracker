import styled from '@emotion/styled'
import { Button, Container } from '@mui/material'

export const ContactsContainenr = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '30px auto',
  padding: '40px',
  flexDirection: 'row',
  border: 'solid 1px blue',
})) as typeof Container

export const AddButton = styled(Button)(({ theme }) => ({
  width: '11em',
  height: '87px',
  marginTop: '10px',
  textAlign: 'center',
}))
