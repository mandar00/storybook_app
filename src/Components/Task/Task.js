import React, { useEffect, useState } from 'react'
import "./Task.css"


const Task=({task:{title,id,state}}) =>{
    const [starState,setStarState]=useState(true)

    useEffect(()=>{

        if(state==="TASK_ARCHIVED"){
            setStarState(!starState)
        }
    },[ ])
return(
    <>
      <div className='TaskMainDiv'>
          <label>
              <input type='checkbox' defaultChecked={false}></input>
          </label>
          <div className='title'>
            <input className='text'  type='text' readOnly='true' value={title} placeholder='enter value'></input>
          </div>
          <div className={starState?"starIcon":"starIconCkd"} onClick={()=>{setStarState(!starState)}}> </div> 
      </div>
    </>)
}
export default Task 