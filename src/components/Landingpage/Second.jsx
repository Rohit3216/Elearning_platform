import React from 'react'

const Second = () => {
  return (
    <>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">All the skills you need in one place</h1>
      <p className="text-gray-600 mb-4">
        From critical skills to technical topics, Udemy supports your professional development.
      </p>
      <div className="flex space-x-6 border-b border-gray-200 pb-2">
        <button className="text-black font-semibold border-b-2 border-black">
          Data Science
        </button>
        <button className="text-gray-600 hover:text-black">
          IT Certifications
        </button>
        <button className="text-gray-600 hover:text-black">
          Leadership
        </button>
        <button className="text-gray-600 hover:text-black">
          Web Development
        </button>
        <button className="text-gray-600 hover:text-black">
          Communication
        </button>
        <button className="text-gray-600 hover:text-black">
          Business Analytics & Intelligence
        </button>
      </div>
    </div>


    </>


  )
}

export default Second;