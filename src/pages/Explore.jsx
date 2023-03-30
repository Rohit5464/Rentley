import React from 'react'
import { Link } from 'react-router-dom'
import rentImage from '../assets/jpg/rent.jpg'
import sellImage from '../assets/jpg/sell.jpg'
import Slider from '../components/Slider'

const Explore = () => {
  return (
    <div className="explore">
        <header>
            <p className="pageHeader">Explore</p>
        </header>

        <main>
            <Slider/>
            <p className="exploreCategoryHeading">Categories</p>
            <div className="exploreCategories">     
                <Link to='/category/rent'>
                    <img src={rentImage} alt="rent" className='exploreCategoryImg' />
                    <p className="exploreCategoryName">Products for rent</p>
                </Link>
                <Link to='/category/sell'>
                    <img src={sellImage} alt="sell" className='exploreCategoryImg' />
                    <p className="exploreCategoryName">Products for sale</p>
                </Link>
                
            </div>
            <div className='space'> </div>
        </main>
    </div>
  )
}

export default Explore