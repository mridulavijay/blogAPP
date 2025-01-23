import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Grid from '@mui/material/Grid2';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';
const Addblogs = () => {
  const [form,setForm]=useState({
    image:'',
    title:'',
    description:''
  })
  const navigate=useNavigate();
  const location=useLocation();
  function capValue(){
if (location.state!=null) {
  axiosInstance.put('/api/blog/edit/'+location.state.val._id,form).then((res)=>{
    alert(res.data.message);
    navigate('/blogs');
  })
} else {
  axiosInstance.post('/api/blog/add',form).then((res)=>{
    alert(res.data.message);
    navigate('/blogs');
  })
}

    
  }
  useEffect(()=>{
    if (location.state!=null) {
      setForm({...form,title:location.state.val.title,
        description:location.state.val.description,
        image:location.state.val.image
      })
    } else {
      setForm({...form,title:'',
        description:'',
        image:''
      })
    }
  },[])
  return (
    <div style={{margin:'5%'}}>
     
    <Grid container spacing={1}>
<Grid   size={{ xs: 6, md: 12}}>
<TextField fullWidth id="outlined-basic" label="BlogName"  name='title'
value={form.title}
onChange={(e)=>{
  setForm({...form,title:e.target.value})
}}

variant="outlined" />
</Grid>
<Grid  size={{ xs: 6, md: 12}} >
<TextField fullWidth value={form.description}
 multiline
          rows={4} 
          id="outlined-basic" label="Blog Description"
         name='description'
          onChange={(e)=>{
            setForm({...form,description:e.target.value})
          }}
          variant="outlined" />
</Grid>
<Grid   size={{ xs: 6, md: 12}}>
<TextField value={form.image} fullWidth id="outlined-basic" label="Image URL" 
name='image'
onChange={(e)=>{
  setForm({...form,image:e.target.value})
}}
variant="outlined" />
</Grid>
<Grid   size={{ xs: 6, md: 6}}>
<Button id="outlined-basic" label="Image URL" onClick={capValue} variant="outlined">ADD Blog</Button>
</Grid>
</Grid>
</div>
  )
}

export default Addblogs