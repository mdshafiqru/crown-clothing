import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'


const Header = ({ currentUser }) => (
    <div className ='header'>
        <Link to='/' className ='logo-container'>
            <Logo className ='logo' />
        </Link>
        <div className ='options'>
            <Link to ='/' className ='option' >home</Link>
            <Link to='shop' className ='option'>shop</Link>
            <Link to ='contact' className='option'>conntact</Link>
            {
                currentUser?
                <div className='option' onClick={() => auth.signOut()} >sign out</div>
                :
                <Link to ='signin' className='option'>sign in</Link>
            }

            
        </div>
    </div>
)

export default Header;
