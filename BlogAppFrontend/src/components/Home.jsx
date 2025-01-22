import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';
const Home = () => {
    const[cardData,setData]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
      axiosInstance.get('http://localhost:3000/api/blogs').then((res)=>{
        setData(res.data);
      }).catch((err)=>{
        console.log(err)
      })
    },[])
    function update_data(val) {
      navigate('/addblogs',{state:{val}})
    }
  return (
    <div style={{margin:'5%'}}>
        <Grid container spacing={2}>
            {cardData.map((row)=>(
  <Grid size={4}>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={row.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {row.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {row.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='warning' variant='contained' onClick={(()=>{
          update_data(row);
        })}>Update</Button>
        <Button size="small" color='error' variant='contained'>Delete</Button>
      </CardActions>
    </Card>
  </Grid>
  ))}
  </Grid>
    </div>
  )
}

export default Home