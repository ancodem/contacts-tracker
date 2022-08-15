import styled from '@emotion/styled'
import { Card } from '@mui/material'

const CardContainer = styled(Card)(({ theme }) => ({
  width: '10em',
  margin: '10px 20px',
  '&:hover': {
    backgroundColor: '#bbdefb',
    cursor: 'pointer',
  }
}))

export default CardContainer
