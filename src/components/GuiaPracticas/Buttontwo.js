import React from 'react'

export const Buttontwo = ({setModal}) => {
  return (
    <button className="primaryBtn" data-aos='fade-up-right'
    onClick={()=>setModal(true)}>Guía Prácticas</button>
    
  )
}
