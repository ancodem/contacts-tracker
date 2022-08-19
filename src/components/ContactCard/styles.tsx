import styled from '@emotion/styled'
import { Card } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

export const CardContainer = styled(Card)(({ theme }) => ({
  width: '10em',
  position: 'relative',
  margin: '10px 20px',
  border: 'solid 1px white',
  '&:hover': {
    color: '#bbdefb',
    border: 'solid 1px #bbdefb',
    cursor: 'pointer',
  }
}))

export const EditContactIcon = styled(EditIcon)(({ theme }) => ({
  position: 'absolute',
  right: '1px',
  bottom: '1px',
  alignSelf: 'flex-end',
  borderRadius: '20px',
  padding: '3px',
  color: '#efebe9',
  '&:hover': {
    color: '#bcaaa4'
  }
}))

export const DeleteContactIcon = styled(HighlightOffIcon)(({ theme }) => ({
  position: 'absolute',
  right: '1px',
  top: '1px',
  alignSelf: 'flex-end',
  borderRadius: '20px',
  padding: '3px',
  color: '#efebe9',
  '&:hover': {
    color: '#ff1744'
  }
}))
