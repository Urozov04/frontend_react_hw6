import React from 'react'
import notFoundImg from "../../assets/404_page-not-found.png"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center py-10'>
        <div className=''>
            <img src={notFoundImg} alt="" />
        </div>
        <Link to={"/"}>Go home</Link>
    </div>
  )
}

export default NotFound