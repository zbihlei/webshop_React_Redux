import React from 'react'
import Poster from '../Poster/Poster'
import Products from '../Products/Products'
import Categories from '../Categories/Categories'

const Home = () => {
  return (
<>
    <Poster/>
    <Products amount={5} title='Trending'/>
    <Categories amount={5} title='Most popular'/>
    <Products title = 'Less then 100$' filtered={true}/>
</>
  )
}

export default Home