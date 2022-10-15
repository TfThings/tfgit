import React, {useState} from 'react'
import {Link} from "react-router-dom";
import{TiThMenu} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'
import {AiOutlineMenu} from 'react-icons/ai'
import {CgClose} from 'react-icons/cg'
import {GiPalmTree} from 'react-icons/gi'
import assets from '../assets'
import './Navbar.css'
import Home from './Home';
import { Route } from 'react-router-dom';

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick=() => setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
        <Link to="/things"><h1 className='navTitle'><span>Things<GiPalmTree/></span>Florida</h1></Link>
            {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                
                <li><Link to="/things">Find Things</Link></li>
                <li><Link to =""> Search</Link></li>
                <li><Link to ="">List a Event</Link></li>
                <li><Link to ="">About</Link></li>
                <li><Link to ="">Contact</Link></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<CgClose className='tap' />) : <AiOutlineMenu className='tap'/>}
            </div> */}
        </div>
    </div>
  )
}

export default Navbar