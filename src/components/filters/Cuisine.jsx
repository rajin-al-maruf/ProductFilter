import React from 'react'

const Cuisine = ({criteria, handleChange}) => {
  return (
    <div>
      <select 
            name="cuisine" 
            id="cuisine"
            value={criteria.cuisine}
            onChange={handleChange}
            className='border rounded-full px-2 py-1 text-xs focus:outline-none mr-4 hover:cursor-pointer'
        >
            <option value="Cuisine">Cuisine</option>
            <option value="Indian">Indian</option>
            <option value="Bangla">Bangla</option>
            <option value="Arabian">Arabian</option>
            <option value="Chinese">Chinese</option>

        </select>
    </div>
  )
}

export default Cuisine
