import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FoodCard from './components/FoodCard'

const apiKey = 'b8a0168936974549b29e0d940345f183'

const Test = () => {

  return (
    <>
        <div className="md:h-[100vh] sm:w-fit bg-blue-300 sticky top-0 z-[-10]">
          <img className='md:h-fit md:w-fit' src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=1170&q=80" alt="" />
        </div>
    </>
  )
}

export default Test
