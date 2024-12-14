import React from 'react'
export default function SortingOptions({handleClick}){

    return (
        <>
            <input  name='date' id='date' type='radio'  onClick={handleClick} ></input>
            <label htmlFor='date'>Date</label>
            <input name='amount' type='radio' id='amount'  onClick={handleClick}></input>

<label htmlFor='amount'>amount</label>            <input name='title' id='title'  type='radio' onClick={handleClick}></input>


<label htmlFor='title'>Title</label>        </>
    )
}