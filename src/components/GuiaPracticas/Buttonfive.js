import React from 'react'

export const Buttonfive = ({setModal}) => {
  return (
    <button className="primaryBtn" data-aos='fade-up-right'
    onClick={()=>setModal(true)}>UNIDAD 3</button>
  )
}