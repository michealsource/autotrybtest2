import { Box, Modal } from '@mui/material';
import React,{useState} from 'react'
import alreadyRegistred from '../images/alreadyRegistred.gif'
import {FacebookShareButton,TwitterShareButton,WhatsappShareButton,LinkedinShareButton,InstapaperShareButton} from "react-share";
import {FacebookIcon,InstapaperIcon,LinkedinIcon,TwitterIcon,WhatsappIcon} from "react-share";
import '../App.css'
function ErrorModal({openError,setOpenError,handleOpenError,handleCloseError}) {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
  return (
<div>
<Modal
  open={openError}
  onClose={handleCloseError}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  className="modalContainer">
    <div className='successContainer'>
         <img src={alreadyRegistred} alt="" width={100} height={100}/>
        <h5 className='alreadyText'>Already a Member!</h5>
        <span className='checkEmailText'>Check your email for more info., or contact Member Services at membership@autotryb.com</span>
        <div>
          

<div className='shareContainerError erroContainer'>

<h6 className='shareTitle'>Tell a friend:</h6>
        <FacebookShareButton
        className='shareIcon'
          url='https://www.autotryb.com/'
           title={"Hey, I think you will like this \n\ I've just joined Autotryb for amazing Cash Back when fixing my car at any workshop in Nigeria! Join me here and be among the first to get the N5K welcome bonus"}
        >
          <FacebookIcon round={true} logoFillColor="white" size={25}/>
        </FacebookShareButton>

        <WhatsappShareButton 
        className='shareIcon'
        title={"Hey, I think you will like this \n\ I've just joined Autotryb for amazing Cash Back when fixing my car at any workshop in Nigeria! Join me here and be among the first to get the N5K welcome bonus"}
        url='https://www.autotryb.com/'
        >
            <WhatsappIcon round={true} logoFillColor="white" size={25}/>
        </WhatsappShareButton>

        <TwitterShareButton
          className='shareIcon'
          url='https://www.autotryb.com/'
           title={"Hey, I think you will like this \n\ I've just joined Autotryb for amazing Cash Back when fixing my car at any workshop in Nigeria! Join me here and be among the first to get the N5K welcome bonus"}
          >
          <TwitterIcon round={true} logoFillColor="white" size={25}/>
        </TwitterShareButton>


        <LinkedinShareButton 
           url='https://www.autotryb.com/'
           title={"Hey, I think you will like this \n\ I've just joined Autotryb for amazing Cash Back when fixing my car at any workshop in Nigeria! Join me here and be among the first to get the N5K welcome bonus"} >
            <LinkedinIcon round={true} logoFillColor="white" size={25}/>
        </LinkedinShareButton>

       
</div>
        </div>
       
    </div>
    
  </Box>
</Modal>
    </div>
  )
}

export default ErrorModal