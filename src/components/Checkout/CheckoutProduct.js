import React from 'react'
import './CheckoutProduct.css'
const CheckoutProduct = ({id,image,title,price,rating}) => {
  return (
    <div className="checkoutProduct">
        <div>
        <img 
            className='checkoutProduct__image'
            src={image}
        />
            </div>
        <div className="checkoutProduct__info">
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

        <div className="checkoutProduct__rating">
                {
                    Array(rating).fill().map((_,i)=>(
                        <p>&#11088;</p>
                    ))
                }
        
        </div> 
        <button>Remove from basket</button>  
        </div>

    </div>
  )
}

export default CheckoutProduct