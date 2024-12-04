import React, { useState } from 'react'
import Category from './filters/Category'
import Cuisine from './filters/Cuisine'
import { CiFilter } from "react-icons/ci";

const Filter = ({criteria, setCriteria}) => {


  function handleChange(event) {
    const {value, name} = event.target
    setCriteria(prev => ({
      ...prev,
      [name]: value
    }))
  }

  console.log(criteria)

  return (
    <div>
      <form className='border-b border-gray-600 pb-4 flex items-center '>
        <CiFilter size={20} className='border border-gray-500 rounded-full opacity-90 h-7 w-10 p-1 mr-4'/>
        <Category 
          criteria={criteria}
          handleChange={handleChange}
        />
        <Cuisine
          criteria={criteria}
          handleChange={handleChange}
        />
        {/* <select 
            name="" 
            id="price"
            className='border rounded-full px-2 py-1 text-xs focus:outline-none mr-4'
        >
            <option value="$10-$100">$10-$100</option>
            <option value="mid">$101-$200</option>
            <option value="high">$201-$300</option>
        </select> */}

      </form>
      
    </div>
  )
}

export default Filter
