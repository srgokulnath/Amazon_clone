import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider"
import { getAuth, signOut  } from '@firebase/auth'


function Header() {


    const [{ basket, user }] = useStateValue();
    const login = ()=>{
        const auth = getAuth();
        if(user){
            signOut(auth)
                .then(()=>{

                })
                .catch((e)=>{
                    e.message();
                })
        }
    }
    console.log(basket);
    return (
        <nav className = "header">
            {/* logo */}
            <Link to = "/">
                <img className = "header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            {/* searchbox */}
            <div className = "header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className = "header__searchIcon" />
            </div>
            
            {/* 3links */}
            <div className = "header__nav">
                <Link to = {!user && "/login"} className = "header__link"> 
                    <div onClick = {login} className = "header__option">
                        <span className = "header__optionLineOne">
                             Hello {user?.email}
                        </span>
                        <span className = "header__optionLineTwo">
                            {user? 'Sign out':'Sign in'}
                        </span>
                    </div>
                    
                </Link>
                <Link to = "/" className = "header__link"> 
                    <div className = "header__option">
                        <span className = "header__optionLineOne">
                             Returns
                        </span>
                        <span className = "header__optionLineTwo">
                            Orders
                        </span>
                    </div>
                    
                </Link>
                <Link to = "/" className = "header__link"> 
                    <div className = "header__option">
                        <span className = "header__optionLineOne">
                             Your
                        </span>
                        <span className = "header__optionLineTwo">
                            Prime
                        </span>
                    </div>
                    
                </Link>

            </div>
            {/* basket icon */}
            <Link to = "/checkout" className = "header__link">
                <div className = "header__optionBasket">
                    {/* shopping basket */}
                    <ShoppingBasketIcon/>
                    {/* number of items */}
                    <span className = "header__optionLineTwo header__basketCount"> {basket?.length} </span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
