import React from 'react'
import { Box, Input, Modal } from '@mui/material'

interface ModalProps {
  open: boolean
}

const ModalWindow: React.FC<ModalProps> = ({ open }) => {
  return (
    <>
      <Modal
        open={open}
      >
        <Box
          sx={{
            width: '300px',
            height: '150px',
          }}
        >
          <Input placeholder='Name' />
          <Input placeholder='Phone Number' />
        </Box>
      </Modal>
    </>
  )
}

export default ModalWindow
