import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {

    return(
        <div className="navbar-container">
            <Link>
                <button >Home</button>
            </Link>
            <Link>
                <button to='/bubble-builder'>Bubble</button>
            </Link>
        </div>
    )
}

export default Navbar