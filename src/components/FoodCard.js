import { Link } from 'react-router-dom'



const FoodCard = ({chicken}) => {

  return (
    <>
    
    <a href="/recipe/123">Hello</a>
      <div className='relative grid sm:grid-cols-2 bg-black '>
        {chicken.map((res)=>{
          return (
            <div key={res.id}>
              <section className='bg-red-400'>
                <Link to={`/recipe/${res.id}`} >
                  <img className='w-full p-4' src={res.image} alt={res.title} />
                </Link>
              </section>
              <section className='bg-blue-200'>
              <Link to={`/recipe/${res.id}`} >
                <h2 className='font-bold text-2xl p-2'>{res.title}</h2>
              </Link>
              </section>
            </div>
           );
        })
        } 

      </div>
    </>
  )
}

export default FoodCard
