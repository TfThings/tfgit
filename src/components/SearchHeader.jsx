import React from 'react'
import './SearchHeader.css'
import {AiOutlineSearch} from 'react-icons/ai'

const SearchHeader = () => {
  return (
    <>
    <div className='searchheader'>
        <div className='content'>
            <h1>Find the perfect thing to do</h1>
            <p className='search-text'>Search the largest collection of hand picked things you can do near you</p>
            {/* <form className='search'>
                <div>
                    <input type='text' placeholder='Search a Thing to do...'/>
                </div>
                <div className='radio'>
                    <button type='submit' className='icon'><AiOutlineSearch/></button>
                </div>
            </form> */}
        </div>
    </div>
    </>
  )
}

export default SearchHeader