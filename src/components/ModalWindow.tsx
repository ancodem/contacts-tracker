import React from 'react'
import { Paper, Button, FormGroup, Input, Modal, Typography } from '@mui/material'
import { useAppSelector, useActions } from 'hooks'

interface ModalProps {
  open: boolean
  handleClose: () => void
  buttonText: string
  actionOnClick: (payload: number) => void
}

const ModalWindow: React.FC<ModalProps> = (
  { open, buttonText, actionOnClick, handleClose }
) => {
  // STATE ------------------------------------------------------------------>
  const {
    changeNameInput,
    changePhoneInput,
  } = useActions()

  const { name, phoneNumber } = useAppSelector(
    state => ({
      name: state.main.contactInput.name,
      phoneNumber: state.main.contactInput.phoneNumber,
    })
  )

  // INPUTS ----------------------------------------------------------------->
  const onNameChange = (input: string) => {
    changeNameInput(input)
  }

  const onPhoneNumberChange = (input: string) => {
    changePhoneInput(input)
  }

  // BUTTON ----------------------------------------------------------------->
  const handleClick = () => {
    const payload = Date.now()
    actionOnClick(payload)
    handleClose()
  }

  return (
    <aside>
      <Modal
        open={open}
        onClose={() => handleClose()}
        sx={{
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: '2em',
            width: '300px',
            height: '200px',
          }}
        >
          <FormGroup
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              height: '10em'
            }}
          >
            <Input
              onChange={(e) => onNameChange(e.currentTarget.value)}
              value={name}
              placeholder='Name' />
            <Input
              type='tel'
              onChange={(e) => onPhoneNumberChange(e.currentTarget.value)}
              value={phoneNumber}
              placeholder='Phone Number' />
            <Button
              type="submit"
              onClick={handleClick}
              variant="outlined">
              <Typography>
                {buttonText}
              </Typography>
            </Button>
          </FormGroup>
        </Paper>
      </Modal>
    </aside>
  )
}

export default ModalWindow
