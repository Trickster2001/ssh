import React, { useState } from 'react'
import {CiMenuBurger} from 'react-icons/ci'
import {AiOutlineClose} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    navigate(`/searched/${search}`)
    setSearch('')
  }


  return (
    <>
      <div className='bg-red-200 w-full fixed top-0 left-0 z-10'>
        <div className='md:flex md:px-10 px-5 py-4 items-center justify-between'>
          <div className='cursor-pointer border-b border-black flex items-center font-bold text-3xl pb-4'>
            Simply
          </div>
          <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          {open ? <AiOutlineClose/> : <CiMenuBurger/> }
          </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-red-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'}`}>
              <li className='md:ml-8 text-xl w-fit md:my-0 my-5 border-b border-red-50'>
                <Link to={'/'}>Home</Link>
              </li>
              <li className='border-b w-fit border-red-50 md:ml-8 text-xl md:my-0 my-5'>
                <form onSubmit={submit} className='flex items-center'>
                <input type="text" placeholder='Search Here...' className='outline-none px-2 rounded-md bg-transparent text-black placeholder:text-black' value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                </form>
              </li>
              <li className='border-b w-fit  border-red-50 md:ml-8 text-xl md:my-0 my-5 font-semibold'>
            {/* <Button className="px-2"> */}
              Account
            {/* </Button> */}
              </li>
              <li className='border-b w-fit font-semibold border-red-50 md:ml-8 text-xl md:my-0 '>
            {/* <Button className="px-2"> */}
              Sign In
            {/* </Button> */}
              </li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
