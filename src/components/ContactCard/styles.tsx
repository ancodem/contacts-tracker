import styled from '@emotion/styled'
import { Card } from '@mui/material'

const CardContainer = styled(Card)(({ theme }) => ({
  width: '10em',
  margin: '10px 20px',
  border: 'solid 1px white',
  '&:hover': {
    color: '#bbdefb',
    border: 'solid 1px #bbdefb',
    cursor: 'pointer',
  }
}))

export default CardContainer
