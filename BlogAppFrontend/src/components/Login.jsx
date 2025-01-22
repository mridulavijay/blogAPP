import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const[form,setForm]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate();
  function capValue() {
   // console.log(form);
axios.post('http://localhost:3000/user/login',form).then((res)=>{
   alert(res.data.message);
   if(res.data.token){
    sessionStorage.setItem('logintoken',res.data.token);
    navigate('/blogs');
   }
 else{
  navigate('/');
 }
}).catch((error)=>{
  alert('Invalid login');
})
  }
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h3'style={{color:'purple'}}>BlogApp Login</Typography>
        <br></br><br></br>
        <div>
        <TextField label='Email' variant='outlined'name='email' onChange={(e)=>{
          setForm({...form,email:e.target.value})
        }}></TextField>
        </div>
        <br/>
        <div>
        <TextField label='Password' type="password" variant='outlined' name='password' onChange={(e)=>{
           setForm({...form,password:e.target.value})
        }}></TextField>
        </div>
      
        <br></br>
        <Button color='secondary' variant='contained' onClick={capValue}>Login</Button>
        <br />
        <div>
            <Link to={'/signup'} style={{color:'purple'}} > New user? Please Register here</Link>
        </div>

    </div>
  )
}

export default Login