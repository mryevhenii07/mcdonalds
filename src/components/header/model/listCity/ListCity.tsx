import  React,{FC, useState} from 'react';
import ItemCity from '../itemCity/ItemCity';
import s from './ListCity.module.css';
  const SelectCity:FC = ()=> {
 const [cityRest,setCityRest]=useState(restaurant)
 const [isOpen,setIsOpen]=useState<boolean>(false)

 console.log(cityRest);
 const onOpen =()=>{
    setIsOpen(!isOpen)
 }

  return (

    <div className={s.localWrap} onClick={onOpen}>

  <div >Оберіть місто закладу</div>

  <div className={s.localWrapInput}> 
    {isOpen && <div className={s.listCity}>
    {cityRest.map((res) =><ItemCity {...res}/>)}
   
</div>}
  
    </div>
    </div> 

   
  );
}

export default SelectCity
// import  React,{FC} from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// const city = [
//     {city:"Харків",street:"Mira 99",time:" 07:00-22:00"}
// ]
// // interface PropsI {
// //     city:string,
// //     street:string,
// //     time:string,

// // }

//   const SelectSmall:FC = ()=> {
//   const [city, setCity] = React.useState('');
// console.log(city);

//   const handleChange = (event: SelectChangeEvent) => {
//     setCity(event.target.value);
//   };

//   return (<>
//     <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
//       <InputLabel id="demo-select-small">City</InputLabel>
//       <Select
//         labelId="demo-select-small"
//         id="demo-select-small"
//         value={city}
//         label="Age"
//         onChange={handleChange}
//       >
//         <MenuItem value={city}>
//           <em>Жодного</em>
//         </MenuItem>

//         <MenuItem value={"Харків"}>Харків</MenuItem>
//         <MenuItem value={"Львів"}>Львів</MenuItem>
//         <MenuItem value={"Рівне"}>Рівне</MenuItem>
//         <MenuItem value={"Тернопіль"}>Тернопіль</MenuItem>
//         <MenuItem value={"Черкаси"}>Черкаси</MenuItem>
       
//       </Select>
      
//     </FormControl>
//     {city &&  <div>
//     <div>{city}</div>
//     <div>Mira 100</div>
//     <div> Close</div>
//     <div>Open</div>
//   </div>}
 
//     </>
//   );
// }

// export default SelectSmall



const restaurant = [
    {
        id: Date.now(),
        city: "Харків",
        street: "Міра 99",
        time: "09:00-19:00",
        open: true,
        delivery: true,
        generator: true,
    },
    {
        id: Date.now(),
        city: "Рівне",
        street: "Маркс 9",
        time: "09:00-21:00",
        open: true,
        delivery: true,
        generator: true,
    },
    {
        id: Date.now(),
        city: "Львів",
        street: "Перемога 99",
        time: "08:00-19:30",
        open: true,
        delivery: true,
        generator: true,
    },
    {
        id: Date.now(),
        city: "Одеса",
        street: "Карпа 99",
        time: "09:00-19:00",
        open: true,
        delivery: true,
        generator: true,
    },
    {
        id: Date.now(),
        city: "Чернігів",
        street: "Міра 99",
        time: "09:00-19:00",
        open: true,
        delivery: true,
        generator: true,
    },
    {
        id: Date.now(),
        city: "Донецьк",
        street: "Міра 99",
        time: "09:00-19:00",
        open: true,
        delivery: true,
        generator: true,
    },
    {
        id: Date.now(),
        city: "Київ",
        street: "Ломоносова 199",
        time: "09:00-12:00",
        open: true,
        delivery: true,
        generator: true,
    }
]