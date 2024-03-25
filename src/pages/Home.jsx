import React from 'react'
import Navbar from '../component/Navbar'
import Annoucement from '../component/Annoucement'
import Slider from '../component/Slider'
import Categories from '../component/Categories'
import Products from '../component/Products'


const Home = () => {
  return (
    <div>
      <Annoucement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home
