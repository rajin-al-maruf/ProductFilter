import React from 'react'

const Filter = () => {
  return (
    <div className='max-w-4xl m-auto mt-10'>
      <form className='border-b pb-4'>

        <select 
            name="" 
            id="catagory"
            className='border rounded-full px-2 py-1 text-xs focus:outline-none mr-4'
        >
            <option value="formal shirt">Formal Shirt</option>
            <option value="casual shirt">Casual Shirt</option>
            <option value="t-shirt">T-shirt</option>
            <option value="hoddie">Hoddie</option>
        </select>
        <select 
            name="" 
            id="brand"
            className='border rounded-full px-2 py-1 text-xs focus:outline-none mr-4'
        >
            <option value="louis vuitton">Louis Vuitton</option>
            <option value="gucci">Gucci</option>
            <option value="levis">Levi's</option>
            <option value="easy">Easy</option>
            <option value="chanel">Chanel</option>

        </select>
        <select 
            name="" 
            id="price"
            className='border rounded-full px-2 py-1 text-xs focus:outline-none mr-4'
        >
            <option value="low">0-100$</option>
            <option value="mid">100-500$</option>
            <option value="high">500-1000$</option>
        </select>

        <button
            className='bg-gray-900 border text-white rounded-full px-8 py-2 text-xs focus:outline-none'
        >Filter</button>

      </form>
      
    </div>
  )
}

export default Filter
