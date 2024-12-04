import React from 'react'

const Category = ({criteria, handleChange}) => {
  return (
    <div>
      <select 
            id="category"
            name="category"
            value={criteria.category}
            onChange={handleChange}
            className='border rounded-full px-2 py-1 text-xs focus:outline-none mr-4 hover:cursor-pointer'
        >
            <option value="Category">Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snaks">Snaks</option>
        </select>
    </div>
  )
}

export default Category
