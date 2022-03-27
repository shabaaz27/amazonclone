import React from 'react'
import './Checkout.css'
import banner from '../../assets/banner.jpg'
import Subtotal from './Subtotal'
import { useStateValue } from '../Context/StateProvider'
import CheckoutProduct from './CheckoutProduct'
const Checkout = () => {
    const [{basket},dispatch] =useStateValue();

  return ( 
    
    <div className="checkout">
        <div className="checkout__left">
            <img className='checkout__ad' 
             src={banner}
            alt=''/>
        
        <div>
                <h2 className="checkout__title">
                        Shopping Basket 
                </h2>
           { basket.map(item=>{
               return(
                   <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                   />
               ) 
           })}
        </div>    
        </div>

        <div className="checkout__right">
           <Subtotal/>

        </div>
        
    </div>
  )
}

export default Checkout