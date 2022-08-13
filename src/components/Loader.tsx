import { CircularProgress, Container } from '@mui/material'
import React from 'react'

const Loader: React.FC = () => (
  <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
    <CircularProgress thickness={10} />
  </Container>
)
export default Loader
