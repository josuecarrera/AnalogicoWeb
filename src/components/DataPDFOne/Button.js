import React from 'react'

export const Button = ({setModal}) => {
  return (
    <button className="primaryBtn" data-aos='fade-up-right'
    onClick={()=>setModal(true)}>View my Resume</button>
    
  )
}
