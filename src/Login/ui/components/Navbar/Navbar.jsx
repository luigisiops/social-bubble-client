import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {

    return (
        <div className="navbar-container">
            <h1>Social Bubble</h1>

            <div className="nav-item-container">
                <i class="fas fa-home"></i>
                <h2><Link to='/bubbles'>Bubbles</Link></h2>
            </div>

            <div className="nav-item-container">
                <i class="fas fa-tools"></i>
                <h2><Link to='/bubble-builder'>Bubble Builder</Link></h2>
            </div>

            <div className="nav-item-container">
                <i class="fas fa-info-circle"></i>
                <h2><Link to='/bubble-builder'>Covid-19 Info</Link></h2>
            </div>

            <div className="nav-item-container">
                <i class="fas fa-door-open"></i>
                <h2><Link to='/bubble-builder'>Logout</Link></h2>
            </div>
            
        </div>
    )
}

export default Navbar