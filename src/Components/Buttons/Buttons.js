import React from 'react'
import "./Buttons.css"

const Buttons=(props) =>{
    const {variant,children,...rest}=props
return(
    <>
      <button className={` button ${variant}`} >{children}</button>
    </>)
}
export default Buttons