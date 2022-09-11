import React from 'react'
import successLogo from '../images/successLogo.gif'
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Success({handleOpen,setOpen,open}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
        

         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <img src={successLogo} alt="" />
        <h5>Thanks for joining!</h5>
        <span>We’ve sent you an email</span>
      </Modal>
    </div>
  )
}

export default Success