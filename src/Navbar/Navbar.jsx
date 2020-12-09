import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {

    return (
        <div className="navbar-container">

            <div className="nav-item-container">
                <i class="fas fa-home nav-icon" ></i>
                <h2 className="nav-item-text"><Link to='/dashboard'>Bubbles</Link></h2>
            </div>

            <div className="nav-item-container">
                <i class="fas fa-tools nav-icon"></i>
                <h2 className="nav-item-text"><Link to='/bubble-builder'>Bubble Builder</Link></h2>
            </div>

            <div className="nav-item-container">
                <i class="fas fa-info-circle nav-icon"></i>
                <h2 className="nav-item-text"><Link to='/bubble-builder'>COVID-19 Info</Link></h2>
            </div>

            <div className="nav-item-container">
                <i class="fas fa-door-open nav-icon"></i>
                <h2 className="nav-item-text"><Link to='/bubble-builder'>Logout</Link></h2>
            </div>
            
        </div>
    )
}

export default Navbar
