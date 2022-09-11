import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import './customer.css'
import { getWaitList } from '../api';

var triggered = false;

export default function Customers() {

  const [data, setData] = React.useState([])

  const populateData = async ()=>{
    const _data = await getWaitList();
    // console.log(_data)
    if(_data.status){
      setData((_data.data).reverse())
    }else{
      alert(_data.reason)
    }
  }

  const autoTrigger = ()=>{
    const _input = prompt("Enter Password");
    
    if( _input === process.env.REACT_APP_WAITLIST_ADMIN_PASSWORD ){
      localStorage.setItem("ableToGetWaitList", "true")
      populateData()
    }else{
      autoTrigger();
      return 
    }
  }

  React.useEffect(()=>{

    const isPasswordAuth = localStorage.getItem("ableToGetWaitList");

    if((!triggered) && (isPasswordAuth == null)){
      autoTrigger()
    }
    triggered = true;

    if(isPasswordAuth !== null){
      populateData()
    }
  }, [])
  return (
    <Box style={{width:'70%', marginLeft:'auto', marginRight:'auto', marginTop:50}} >
        <Typography className='headerText' variant="h1" component="h2" >
                    AUTOTRYB CUSTOMERS WHISHLIST
        </Typography>
        
      <Chip avatar={<Avatar style={{fontWeight:'bold', fontSize: 14}}> 
      {data.length}
       </Avatar>} label="Total Numbers of Customers"  style={{fontSize:'20px',marginBottom:20}}/>
      
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize:'12px',fontWeight:"bold"}}>S/N</TableCell>
            <TableCell align="right" style={{fontSize:'12px',textAlign:"center",fontWeight:"bold"}}>FullName</TableCell>
            <TableCell align="right" style={{fontSize:'12px',textAlign:"center",fontWeight:"bold"}}>Email</TableCell>
            <TableCell align="right" style={{fontSize:'12px',textAlign:"center",fontWeight:"bold"}}>Garage List</TableCell>
            <TableCell align="right" style={{fontSize:'12px',textAlign:"center",fontWeight:"bold"}}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontSize:'12px'}}>
                {index + 1}
              </TableCell>
              <TableCell align="right" style={{fontSize:'11px', textAlign:"center"}}>{row.fullName}</TableCell>
              <TableCell align="right" style={{fontSize:'11px', textAlign:"center"}}>{row.email}</TableCell>
              <TableCell align="right" style={{fontSize:'11px', textAlign:"center"}}>{row.workshopAddress}</TableCell>
              <TableCell align="right" style={{fontSize:'11px', textAlign:"center"}}>{(new Date(row.createdAt)).toUTCString() }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
