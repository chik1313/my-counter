import React from 'react';
import {ButtonComponent} from "./ButtonComponent";
import CountValue from "./CountValue";
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

type CounterPropsType = {
    increment: () => void;
    decrement: () => void;
    count: number,

}

const Counter = (props:CounterPropsType) => {
    return (
        <div  className="app">
            <div className="container">
                <div className='count'>
            <CountValue count={props.count} />
                </div>
                <div className={'buttons_container'}>
                    <ButtonComponent  action={props.increment} disabled={props.count === 5 ? true : false} title="INCREMENT"/>
                    <ButtonComponent action={props.decrement} disabled={props.count === 0 ? true : false} title="DECREMENT" />
                    <ButtonComponent action={()=>{}} title='SET'/>
                </div>
            </div>
        </div>

    );
};

export default Counter;
