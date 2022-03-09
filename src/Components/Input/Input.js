import React from 'react'
import './input.css'

const Input=({variant,placeH,type}) =>{
return(
    <>
      <input className={`input ${variant}`} type={`${type}`} placeholder={`${placeH}`}></input>
    </>)
}
export default Input