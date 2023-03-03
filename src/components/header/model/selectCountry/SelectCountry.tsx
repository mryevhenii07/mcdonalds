import  React,{FC} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const city = [
    {city:"Харків",street:"Mira 99",time:" 07:00-22:00"}
]
// interface PropsI {
//     city:string,
//     street:string,
//     time:string,

// }

  const SelectSmall:FC = ()=> {
  const [city, setCity] = React.useState('');
console.log(city);

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value);
  };

  return (<>
    <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
      <InputLabel id="demo-select-small">City</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={city}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={city}>
          <em>Жодного</em>
        </MenuItem>

        <MenuItem value={"Харків"}>Харків</MenuItem>
        <MenuItem value={"Львів"}>Львів</MenuItem>
        <MenuItem value={"Рівне"}>Рівне</MenuItem>
        <MenuItem value={"Тернопіль"}>Тернопіль</MenuItem>
        <MenuItem value={"Черкаси"}>Черкаси</MenuItem>
       
      </Select>
      
    </FormControl>
    {city &&  <div>
    <div>{city}</div>
    <div>Mira 100</div>
    <div> Close</div>
    <div>Open</div>
  </div>}
 
    </>
  );
}

export default SelectSmall