import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {

    return (
        <div className="navbar-container">

            <div className="nav-item-container">
                <Link className="nav-item-container" to='/dashboard'>
                    <i class="fas fa-home nav-icon" ></i>
                    <h2 className="nav-item-text">Home</h2>
                </Link>
            </div>

            {/* <div >
                <Link className="nav-item-container" to='/bubbles'>
                    <i class="fas fa-tools nav-icon"></i>
                    <h2 className="nav-item-text">Bubbles</h2>
                </Link>
            </div> */}

            <div>
                <Link className="nav-item-container" to='/bubble-builder'>
                    <i class="fas fa-info-circle nav-icon"></i>
                    <h2 className="nav-item-text">Covid-19 Info</h2>
                </Link>
            </div>

            <div >
                <Link className="nav-item-container" to='/login'>
                    <i class="fas fa-door-open nav-icon"></i>
                    <h2 className="nav-item-text">Logout</h2>
                </Link>
            </div>
            
        </div>
    )
}

export default Navbar