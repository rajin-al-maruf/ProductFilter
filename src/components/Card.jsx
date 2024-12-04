import React from 'react'
import Data from './Data'

const Card = ({criteria}) => {

    const categoryFilter = criteria.category === "Category" ? Data : Data.filter(data => (data.category === criteria.category))
    const cuisineFilter = criteria.cuisine === "Cuisine" ? categoryFilter : categoryFilter.filter(data => (data.cuisine === criteria.cuisine))

  return (
    <div>
      <div className='grid grid-cols-3 gap-10 mt-8'>
        {cuisineFilter.map(data => (
            <div>
               <img className='rounded-lg hover:cursor-pointer hover:-translate-y-1 ease-in-out duration-200 hover:scale-105' src={data.img} alt="" />
               <h2 className='my-2 text-lg font-semibold'>{data.title}</h2>
               <p className='text-xl font-bold mb-2'>{data.price}</p>
               <p className='text-sm'>{data.desc}</p>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default Card
