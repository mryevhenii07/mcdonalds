
import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import s from './cartCity.module.css';
import {IRestaurantAddress} from '../interface/interface';

const  FullCity = ()=>{
  const[city,setCity]=useState<IRestaurantAddress[]>([])
    const {cityId} = useParams()
    
    useEffect(()=>{
      async function fetchCity() {
    try{ 
      const {data} = await axios.get(`https://628f5e0d0e69410599db2da5.mockapi.io/mac/` + cityId);
      // console.log(data); 
      setCity(data)
      
        // console.log(city); 
      }
        catch(error){ console.log(error)}
      }

      fetchCity()
  },[])


    if(!city){ 
      return  <div>Loading</div>
    }
    // console.log(city);  ////////// []  
  return (

    <div>
    {/* <div>{city.city}</div> */}
      {/* {city && city.map((cit:any)=> <div key={cit.id}>{cit.city} s</div>)} */}
      </div>
  )
}

export default FullCity

