import { ArrowOutward } from '@mui/icons-material'
import React from 'react'

function ServiceCard({ item }) {
  return (
    <div className="w-[25vmax] p-3 relative bg-primary text-white">
      <img src={item.icon} alt={item.title} width={50} className='rounded-[100%] border border-solid border-white bg-primary p-2' />
      <h3 className='font-PrimaryFont font-bold text-[1.2vmax] my-4'>{item.title}</h3>
      <p className='font-PrimaryFont text-[0.8vmax] font-medium'>{item.description}</p>
      <ArrowOutward className='' />
    </div>
  )
}

export default ServiceCard