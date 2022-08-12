import React from 'react'
import { FormGroup, Input, Container, Paper } from '@mui/material'

const SignIn: React.FC = () => (
  <Container
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
    <Paper
      elevation={10}
      sx={{
        padding: '2em'
      }}
    >
      <FormGroup
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          height: '10em'
        }}>
        <Input placeholder='Login' />
        <Input placeholder='Password' />
      </FormGroup>
    </Paper>
  </Container>
)

export default SignIn
