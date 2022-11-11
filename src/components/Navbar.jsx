import React from 'react'
import {Link} from "react-router-dom";
import {GiPalmTree} from 'react-icons/gi'
import './Navbar.css'

const Navbar = () => {

    // const[click, setClick] = useState(false)
    // const handleClick=() => setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
        <Link to="/"><h2 className='navTitle'><span>Things<GiPalmTree/></span>Florida</h2></Link>
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