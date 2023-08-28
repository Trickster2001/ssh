import React, { useEffect, useState } from 'react'
import FoodCard from '../components/FoodCard'
import requests from '../Requests'
import Test from '../Test'
import axios from 'axios'

const Home = () => {
  const url = requests.requestChicken
  console.log(url)
  const [chicken, setChicken] = useState([])

  // const getPopular = async() =>{
  //   const check = localStorage.getItem("popular");

  //   if(check) {
  //     setChicken(JSON.parse(check));
  //   } else {

  //     axios.get(url).then((res)=>{
  //       console.log(res.data.results)
  //       let my = res.data.results
  //       setChicken(my)
  //       console.log("axios is calling")
  //       localStorage.setItem("popular", JSON.stringify(my))
  //     })

  //   }
  // }

  // useEffect(()=>{
  //   getPopular()
  //   console.log("Use effect is hitting")
  // },[])

  useEffect(()=>{
    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=b8a0168936974549b29e0d940345f183&number=10`).then((res)=>{
      let my = res.data.recipes
      setChicken(my)
    })
  },[])

  return (
    <>
      <div className='md:flex mt-[84px]'>
        <div className='md:w-1/2 p-4'>
          Add Splider Here
          <Test />
        </div>
        <div className='md:w-1/2'>
          <h2 className='p-2 text-3xl font-medium'>Winner Winner Chicken Dinner !!!</h2>
          <FoodCard chicken={chicken} />
        </div>
      </div>
    </>
  )
}

export default Home
