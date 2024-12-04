import React from 'react'
import Filter from './Filter'
import Card from './Card'

const Dashboard = () => {

  const [criteria, setCriteria] = React.useState({
    category: "Category",
    cuisine: "Cuisine"
  })

  return (
    <div className='max-w-5xl m-auto mt-10'>
      <Filter 
        criteria={criteria}
        setCriteria={setCriteria}
      />
      <Card 
        criteria={criteria}
      />
    </div>
  )
}

export default Dashboard
