import React from 'react'
import { Container, Typography, Paper } from '@mui/material'

const PageNotFound: React.FC = () => (
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
      <Typography
        variant="h1"
        sx={{
          textTransform: 'uppercase',
          fontWeight: '900',
        }}
      >
        page not found
      </Typography>
    </Paper>
  </Container>
)

export default PageNotFound
