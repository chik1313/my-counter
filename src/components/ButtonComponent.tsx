import React from "react";
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';



type ButtonPropsType = {
    action: ()=> void;
    title:string,
    disabled?: boolean;
}

export const ButtonComponent = (props:ButtonPropsType) => {
return (
 <Button
     variant='contained'
     onClick={props.action}
     className='button-inc'
     disabled={props.disabled}>{props.title}
</Button>
)}
