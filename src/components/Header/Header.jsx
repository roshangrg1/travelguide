import React from 'react'
import './Header.scss'
import { Autocomplete } from '@react-google-maps/api'
import { BsSearch } from 'react-icons/bs'


const Header = () => {
    return (
        <div className='Header'>
            <div className="left">
                <p>Guide4Travel</p>
            </div>

            <div className="right">
                <p>Explore new places</p>
                <div className="searchIcon">
                    <BsSearch />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
        </div>

    )
}

export default Header