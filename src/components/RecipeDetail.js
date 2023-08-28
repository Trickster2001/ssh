import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetail = () => {
  const [details, setDetails] = useState({})
  const { id } = useParams()
  const [active, setActive] = useState('instruction')

  // const getDetails = async () => {
  //   const check = localStorage.getItem('details');

  //   if (check) {
  //     setDetails(JSON.parse(check));
  //   } else {
  //     axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b8a0168936974549b29e0d940345f183`)
  //       .then((res) => {
  //         console.log(res)
  //         let my = res.data
  //         setDetails(res.data)
  //         console.log("Use Effect running")
  //         localStorage.setItem('details', JSON.stringify(my))
  //       })
  //   }
  // }

  useEffect(()=>{
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b8a0168936974549b29e0d940345f183`)
      .then((res)=>{
        // console.log(res)
        setDetails(res.data)
        // console.log("Use Effect running")
      })
  },[id])

  // useEffect(() => {
  //   getDetails()
  // }, [])

  return (
    <>
      <div className='sm:flex'>

        <div className='mt-[84px] sm:w-[50%] transition-all ease-in duration-1000 sm:mr-4 sm:p-4'>

          <p className='font-semibold text-xl sm:text-2xl ml-2 p-2 '>{details.title}</p>
          <div className=' transition-all ease-in duration-1000'>
            <img className='w-full px-4 my-4 rounded-3xl transition-all ease-in duration-1000' src={details.image} alt="" />
          </div>

        </div>
        <div className='sm:mt-[100px] sm:w-[50%]'>
          <div className='flex flex-col sm:flex-row'>
            <button onClick={() => setActive('instruction')} className={` border-2 border-black  py-4 px-8 mx-4 sm:mx-0 sm:mr-8 font-semibold rounded-sm hover:bg-black hover:text-white ${active === 'instruction' ? 'bg-black text-white' : 'bg-white text-black'}`}>Instructions</button>

            <button onClick={() => setActive('ingredients')} className={`border-2 border-black py-4 px-8 mx-4 sm:mx-0  mt-4 sm:mt-0 rounded-sm font-semibold hover:bg-black hover:text-white ${active === 'summary' ? 'bg-black text-white' : 'bg-white text-black'}`}>Ingredients</button>

          </div>

          {active === 'instruction' && (<div> <p className='p-4 mt-4 sm:p-0 sm:pr-1' dangerouslySetInnerHTML={{__html: details.instructions}}></p>  <p className='p-4 mt-4 sm:p-0 sm:pr-1' dangerouslySetInnerHTML={{__html: details.summary}}></p></div>)}

          {active === 'ingredients' && (<div className='p-4 mt-4 sm:p-0 sm:pr-1'>
            <div>
              {details.extendedIngredients.map((ingredient)=>{
                return (
                  <li key={ingredient.image}>{ingredient.original}</li>
                )
              })}
            </div>
            </div>)}
        </div>
      </div>
    
    </>
  )
}

export default RecipeDetail
