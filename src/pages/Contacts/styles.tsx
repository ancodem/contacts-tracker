import styled from '@emotion/styled'
import { Container } from '@mui/material'

const ContactsContainenr = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'justify',
  margin: '30px auto',
  padding: '40px',
  flexDirection: 'row',
  flexWrap: 'wrap',
  border: 'solid 1px blue',
})) as typeof Container

export default ContactsContainenr
