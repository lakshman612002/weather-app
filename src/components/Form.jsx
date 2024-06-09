import {Box,InputBase,Button,styled} from '@mui/material';
import { useState } from 'react';
import { getWeather } from '../services/api.js';
const Container=styled(Box)({
    background:'#445A6F',
    padding:'10px'
})

const Input=styled(InputBase)({
    color:'#fff',
    fontSize:'18px',
    marginRight:20
})

const GetButton=styled(Button)({
    background:'#e67e22'
})
const Form=({setResult})=>{
    
    const [data,setData]=useState({city:'',country:''});

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
        
    }

    const getWeatherInfo=async ()=>{
       let response=await getWeather(data.city,data.country);
       setResult(response);
    }
    return(
        <Container>
            <Input placeholder='City'
            name='city'
            onChange={(e)=>handleChange(e)}
            />
            <Input placeholder='Country'
            name='country'
            onChange={(e)=>handleChange(e)}
            />
            <GetButton onClick={()=>getWeatherInfo()} variant='contained'>Get Weather</GetButton>
        </Container>
    )
}
export default Form;