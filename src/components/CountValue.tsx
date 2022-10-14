import React from 'react';
type PropsCountValueType = {
    count: number
}

const CountValue = (props:PropsCountValueType) => {
    return (
        <>
        <h1 className="main_text">
    <h1 className={props.count !== 5 ? "h1" : "h1_wrong"} >
        {props.count}
    </h1>
        </h1>
        </>
    );
};

export default CountValue;
