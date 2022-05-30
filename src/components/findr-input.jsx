import { getAccordionDetailsUtilityClass } from '@mui/material';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';


function FindrInput(props){
    const [value, setValue] = useState('');

    function getData(e){
        setValue(e.target.value);
        props.handleCallback(value);
    }

    return(
        <>
        <p>{props.label}</p> 
        <InputText id={props.id} tooltip={props.tooltip} value={value} onChange={(e) => getData(e)} />
        </>
    );
}
export default FindrInput;