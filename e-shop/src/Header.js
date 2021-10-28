import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

import "./Header.css";

function Header(){
    return(
        <div className="header">
             <div className="header_logo">
        <StorefrontIcon className="header_logo" fontSize="large"/>
        <h2 className="header_logoTitle">eShop</h2>
      </div>
      <div className="header_search">
        <input type="search" className="header_searchInput"/>
        <SearchIcon className="header_searchIcon"/>
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sing In</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <div className="nav_item">
        <ShoppingBasketIcon className="itemBasket"/>
          <span className="nav_itemLineTwo" className="basketCount">0</span>
        </div>
      </div>
        </div>
    )
}

export default Header