import React from 'react'

const Card = ({title,description,image}) => {
  return (
    <div>
        <div className="p-5 bg-white rounded shadow-md flex flex-col  items-center sm:items-start">
           <img src={image} className='sm:w-full w-60 rounded-t-md hover:scale-105 transition ease-in-out' alt="" /> 
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-1">{description.slice(0,2)}</p>
          <div className="flex gap-2 sm:justify-between">
            <button className="bg-blue-600 text-white rounded px-4 py-2">Add to Cart</button>
            <button className="text-blue-600 hover:text-white hover:bg-blue-600 px-4 py-2 rounded ">View Details</button>
          </div>
        </div>
    </div>
  )
}

export default Card