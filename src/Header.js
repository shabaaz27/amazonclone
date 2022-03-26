import React from 'react'
import amazonLogo from './assets/amazon_logo.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket'

const Header = () => {
  return (
    <div className='header'>
        <img className='header__logo'
            src={amazonLogo}
        />
    <div className="header__search">
        <input
            className="header_searchInput"
            type="text"
        />
        <SearchIcon
            className='header__searchIcon'
        />
    </div>
    <div className="header__nav">
        <div className='header__option'>
            <span className="header__optionLineOne">
                Hello Guest
            </span>
            <span className="header__optionLineTwo">
                Sign In
            </span>
        </div>
        <div className='header__option'>
        <span className="header__optionLineOne">
                Returns
            </span>
            <span className="header__optionLineTwo">
                & Orders
            </span>
        </div>
        <div className='header__option'>
        <span className="header__optionLineOne">
               Your
            </span>
            <span className="header__optionLineTwo">
                Prime
            </span>
        </div>
        
        <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>
                0
            </span>
        </div>
    
    </div>    
    </div>
  )
}

export default Header