import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Searched = () => {
  // const getData = async()=>{
  //   let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pizza&number=10`)
  //   let data = await res.json()
  //   return data
  // }

  // getData()
  //   .then((data)=>{
  //     console.log(data)
  //   })

  const apiKey = 'b8a0168936974549b29e0d940345f183'

  const [results, setResults] = useState([])

  const { searchTerm } = useParams()



  // const getResults = async () => {
  //   const check = localStorage.getItem('popular');

  //   if (check) {
  //     console.log("If block here")
  //     setResults(check);
  //   } else {
  //     // axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pizza&number=10`).then((res)=>{
  //     //   console.log(res)
  //     //   let my = res.data.results
  //     //   setResults(my)
  //     //   localStorage.setItem('popular', JSON.stringify(my))
  //     // })
  //     console.log("Nothing to show here")
  //   }
  // }

  // useEffect(() => {
  //   let my = localStorage.getItem('popular')
  //   setResults(JSON.parse(my))
  // }, [])

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchTerm}&number=10`).then((res) => {
      let my = res.data.results
      setResults(my)
    })
  }, [searchTerm])

  return (
    <div className='mt-[100px] w-full m-auto'>
      <p className='text-2xl font-semibold px-4'> You Searched For: {searchTerm} </p>
      <div className='grid md:grid-cols-4 gap-1 p-4 '>
        {results.map((res) => {
          return (
            <div key={res.id} >
              <div>
                <Link to={`/recipe/${res.id}`}>
                  <img src={res.image} alt="" className='rounded-md' />
                </Link>
                <Link to={`/recipe/${res.id}`} >
                  <p className='text-xl font-semibold mt-2'>{res.title}</p>
                </Link>
              </div>
            </div>
          );
        })
        }
      </div>
      <div>
      </div>
    </div>
  )
}

export default Searched
