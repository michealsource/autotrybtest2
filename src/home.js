import React, {useState, useEffect} from 'react'

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import percentage from './images/percentage.png'
import happy from './images/happy.png'
import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.png'
import four from './images/four.png'
import logo from './images/logo.png'
import logoTop from './images/logoTop.png' 
import lader from './images/lader.png'
import mobileLogo from './images/mobileLogo.png'
import successLogo from './images/successLogo.gif'
import {FacebookShareButton,TwitterShareButton,WhatsappShareButton,LinkedinShareButton,InstapaperShareButton} from "react-share";
import {FacebookIcon,InstapaperIcon,LinkedinIcon,TwitterIcon,WhatsappIcon} from "react-share";
import { FaInstagramSquare } from "react-icons/fa";
import ErrorModal from './components/errorModal';
// ANIMATIONS
import walletMoney from './images/walletMoney.gif'
import chat from './images/chat.gif'
import { Box, Modal, Typography } from '@mui/material'
import mechanic from './images/mechanic.gif'

import Loader from "react-js-loader";

import { createWaitList } from './api';

function Home() {
  const [initState, setInitState] = useState({
    fullName: '',
    email: '',
    workspaceAddress: ''
  })
  const [isLoading, setisLoading] = useState(false)
  const [notify, setNotify] = useState({
    show: false,
    status: false,
    title: "",
    message: "",
  })

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // ALREADY ADDED MODAL STATES
  const [openError, setOpenError] = useState(false);
  const handleOpenError = () => setOpenError(true);
  const handleCloseError = () => setOpenError(false);



  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(500);

   const handleScroll = () => {
    console.log("top", document.body.getBoundingClientRect().top);
    
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowHeader(document.body.getBoundingClientRect().top > scrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Full Name is Required'),
    workspaceAddress: Yup.string()
      .min(2, 'Too Short!')
      .required('WorkSpace is Required'),
      email: Yup.string().email('Invalid email').required('Email is Required'),
  });

  const processWaitList = async (values)=>{
    setisLoading(true)
    const data = await createWaitList({
      workshopAddress: values.workspaceAddress,
      email: values.email,
      fullName: values.firstName,
    });

    if(data.status){
      // setNotify({
      //   show: true,
      //   status: true,
      //   title: "Success",
      //   message: "",
      // })
      setOpen(true)
      // swal("Success!", "", "success");
    }else{
      // setNotify({
      //   show: true,
      //   status: true,
      //   title: "Already on Waitlist",
      //   message: "",
      // })
      // setOpen(true)
      setOpenError(true)
      // swal("Already in the waitlist!", "", "warning");
    }
    setisLoading(false)
  }

  return (
    <>
     <div className={`topHeader ${showHeader ? 'headerVisible' : 'headerHidden'}`}>
        <div className='topHeaderWrapper'>
          <img src={logoTop} alt="" className='topImgLogo'/>
        <p>Join the waitlist today and be among the first to get the N5,000 Welcome Bonus</p>
        </div>
      </div>

    <div>
     
      
        <div className='header'>
          <img src={lader} alt="" className='lader'/>
            <div className='headerWrapper'>
            <div className='left'>
              <img src={mobileLogo} alt="" className='mobileLogo'/>
              <h2>Get Cash Back at Any Auto Workshop in Nigeria</h2>
              <p>Join for FREE and start saving for the things your love!</p>
              <button onClick={() => window.location.replace("/#form")}>Join The Waitlist Now</button>
            </div>
            <div className='right'>
                <div className='box1'>
                  <img src={percentage} alt="percentage" width={159} height={94}/>
                  <p className='back'>Withdraw Cash Back</p>
                  <p className='cashBack'>Cash back rates vary</p>
                </div>

                <div className='box2'>
                  <img src={happy} alt="" className='happyImage'/>
                </div>
            </div>
            </div>
            <div className='imageContainer'>
              <img src={two} alt="" width={60}  height={35.13} className='img img1'/>
               <img src={three} alt="" width={60}  height={35.13} className='img img2'/>
               <img src={four} alt="" width={70}  height={40.64} className='img'/>
              <img src={one} alt="" className='imgLast'/>
            </div>
        </div>
        

        <div className='middleSection'>
          <h4>Get paid for fixing your car at the auto workshops you trust</h4>
          <p>Sound too good to be true? Here's the deal: Workshops compensate us for sending you their way. We share those commissions with you as Cash Back. Everyone wins!</p>
        </div>

        <div className='howItWorks'>

          <div className='boxMobile'>
                  <img src={percentage} alt="percentage" width={159} height={94}/>
                  <p className='back'>Withdraw Cash Back</p>
                  <p className='cashBack'>Cash back rates vary</p>
          </div>
        
          <h5>How it works</h5>
          <div className='wrapper'>
            <div className='card card1'>
              <div className='circle'>1</div>
              <h6>Join</h6>
              <span>Sign up for FREE in less than 1 minute. See all the trusted workshops our members can earn Cash Back from.</span>
              <img src={chat} alt="" width={150} height={150} className="animationImage"/>
            </div>

            <div className='card card2'>
              <div className='circle'>2</div>
              <h6>Fix your car as usual</h6>
              <span>Ask the workshop to send your estimate/invoice through Autotryb. Pay your bill on the app, and earn your Cash Back</span>
              <img src={mechanic} alt=""  width={150} height={150} className="animationImage"/>
            </div>

            <div className='card card3'>
              <div className='circle'>3</div>
              <h6>Earn Cash Back</h6>
              <span>Watch your Cash Back balance grow with every repair you do. Then get paid via your bank account</span>
              <img src={walletMoney} alt="" width={150} height={150} className="animationImage wallet"/>
            </div>
             </div>
        </div>

        <div className='friendSection' id='form'>
          <div className='innerFriendsWrapper'>
          <h4>Join the Waitlist & Tell a friend</h4>
          <span>Join today be among the first to get the N5,000 Welcome Bonus!</span>

          <div className='formWrapper'>
          <Formik
              initialValues={{
                firstName: '',
                workspaceAddress: '',
                email: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={values => {
                // same shape as initial values
                processWaitList(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  
                  <Field placeholder='Enter your full name' className='textAreaInput form-input' name="firstName" />
                  {errors.firstName && touched.firstName ? (
                    <div className={"form-error-message"}>{errors.firstName}</div>
                  ) : null}

                  <Field className="form-input" placeholder='Enter your email address' name="email" type="email" />
                  {errors.email && touched.email ? (
                    <div className={"form-error-message"}>{errors.email}</div>
                  ) : null}
                  
                  <Field className="form-input" placeholder='Enter your favorite garage(s) name, location and phone number &#10;e.g. XYZ - Lagos-0801' name="workspaceAddress" />
                  {errors.workspaceAddress && touched.workspaceAddress ? <div className={"form-error-message"}>{errors.workspaceAddress}</div> : null}

                  <button type='submit'>
                    {
                      (isLoading) ? 
                      <Loader type="spinner-default" bgColor={"#FFFFFF"} color={'#FFFFFF'} size={32} />
                      :
                      <>
                        <img src={logo} alt="" width={60} height={30}/> Join Autotryb Waitlist Now
                      </>
                    }
                  </button>
                </Form>
              )}

            </Formik>
            
            {/* <textarea name="foo" placeholder='What are the names and location of your favorite auto workshops? &#10;e.g. XYZ - Lagos, ABC - Abuja, EEE - PortHarcour' className='textAreaInput'/> */}
            
            {/* <input type="text" placeholder='Enter your full name'/>
            <input type="text" placeholder='Enter your email address' /> */}
            {/* <button><img src={logo} alt="" width={60} height={30}/> Join Autotryb Waitlist Now</button> */}
          </div>
        </div>
        </div>

        <div className='footerSection'>
              <h2>Contact Us</h2>
              <span>membership@autotryb.com</span>
              <img src={logo} alt="" width={100} height={60}/>
              <div className='footerShareIcons'>
                   <FacebookShareButton
        className='shareIcon'
          url='https://www.autotryb.com/'
           title={"Hey, I think you will like this \n\ I've just joined Autotryb for amazing Cash Back when fixing my car at any workshop in Nigeria! Join me here and be among the first to get the N5K welcome bonus"}
        >
          <FacebookIcon round={true} logoFillColor="white" size={25}/>
          {/* <FaInstagramSquare color='red' size={30}/> */}
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

        {/* <SweetAlert show={notify.show} danger={!(notify.status)} success={notify.status} title={notify.title} onConfirm={()=>{}}>{notify.message}</SweetAlert> */}
    </div>

    {/* <button onClick={handleOpenError}>Modal</button> */}

    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  className="modalContainer">
    <div className='successContainer'>
         <img src={successLogo} alt="" width={200} height={200}/>
         <div className='successTextContainer'>
          <h5>Thanks for joining!</h5>
        <span>We’ve sent you an email</span>
         </div>
        
        <div>
          

<div className='shareContainer'>

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

<ErrorModal
 
  openError={openError}
  setOpenError={setOpenError}
  handleOpenError={handleOpenError}
  handleCloseError={handleCloseError}

/>


    </>
  )
}

export default Home