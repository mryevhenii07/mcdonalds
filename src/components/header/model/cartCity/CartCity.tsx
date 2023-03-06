// import React,{useEffect,useState} from 'react'
// import {useParams} from 'react-router-dom';
// import axios from 'axios';
// import s from './cartCity.module.css';
// import {IRestaurantAddress} from '../../../../interface/interface';

// const CartCity = () => {
//   const[city,setCity]=useState([])
//     const {cityId} = useParams()
    
//     useEffect(()=>{

//       async function fatchCity() {
      
//      try{  const {data} = await axios.get(`https://628f5e0d0e69410599db2da5.mockapi.io/mac/${cityId}`);
//         setCity(data) }
//         catch(error){ console.log(error);
//         }
//       }
//      console.log(city);
//      fatchCity()
//   },[])
//     if(!city){
//       return "Loading"
//     }
//   return (

//     <div>
//       <div></div>
//       {city.map((cit:any)=> <div key={cit.id}>{cit.city} </div>)}
//       </div>
//   )
// }

// export default CartCity
export {}