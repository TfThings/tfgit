import React from 'react'
import assets from '../assets'
import {AiOutlineSearch} from 'react-icons/ai'
import './Home.css'

const Home = () => {

    function BoxContent(props) {
        const style1 = {backgroundImage: `url(${props.thumbnail})`}
        const style2 = {color: "white"}

        return <li className='box'>
                <a href='#' style={style2}>
                <img src={props.thumbnail} alt="klre"/>
                <h1>{props.cityName}</h1></a>
                </li>
    }

  return (
    <>
    <div className='home'>
        <div className='content'>
            <h1>Find the perfect thing to do</h1>
            <p className='search-text'>Search the largest collection of hand picked things you can do near you</p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search a Thing to do...'/>
                </div>
                <div className='radio'>
                    <button type='submit'><AiOutlineSearch className='icon'/></button>
                </div>
            </form>
        </div>
    </div>
    <div className='homebox'>
        <div>
            <h1 className='hometitle'>Find Things In Your City</h1>
            <ul className='boxmenu'>
                {/* <BoxContent cityName="Near You" thumbnail={assets.tfback1}/>
                <BoxContent cityName="Fort Myers" thumbnail={assets.fortMyers1}/>
                <BoxContent cityName="Cape Coral" thumbnail={assets.capeCoral1}/>
                <BoxContent cityName="Naples" thumbnail={assets.naplesLogo1}/>
                <BoxContent cityName="Port Charlotte" thumbnail={assets.portChar1}/> */}
            </ul>
        </div>
    </div>
    <div className='countyWrap'>
        <div className='countyDiv'>
            <h1>Find Things In Your Part</h1>
            <div className='countyMap'>
            <figure>
            {/* <img src={assets.maptopbord} alt="floridacount" className="maptop"/>
            <img src={assets.mapmidbord} alt="floridacout" className="mapmid"/>
            <img src={assets.mapbotbord} alt="floridacnt" className="mapbot"/> */}
            </figure>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home