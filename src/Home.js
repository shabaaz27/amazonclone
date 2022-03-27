import React from 'react'
import './Home.css'
import homeImage from './assets/amazon_bodyCover.png'
import Product from './components/Product'
import { bag, boat, book, drone, table } from './assets'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home">
        <div className="home__container">
         
            <img className="home_image"
                src={homeImage}
                alt=""
        />
      
        <div className="home__row">
           <Product  rating={2} image={boat} price={20.35} title="boAt Aavante Bar 900 Bluetooth Soundbar"/>
           <Product image={book}  rating={3} price={6.00} title="React.js Book: Learning React JavaScript Library From Scratch"/>

        </div>
        <div className="home__row">
           
            <Product
            title="Solimo Mira Multi-Purpose Laptop Table "
                    image={table}
                    price={13.00} rating={4} 

            />
           <Product
            price={38.25}
            rating={1}
            image={drone}
            title="YENA Drone"
           />
           <Product title="Amazon Brand - Solimo Laptop Messenger Bag"
           image={bag}
           price={24}
           rating={5}
           />

        </div>
        <div className="home__row">
        <Product  rating={2} image={boat} price="20.35" title="boAt Aavante Bar 900 Bluetooth Soundbar with 30W RMS, 2.0 Channel, Multiple Connectivity, EQ Modes, Sleek Finish, Easy Access Integrated Controls and Remote Control(Premium Black)"/>
        </div>

        </div>
    </div>
  )
}

export default Home