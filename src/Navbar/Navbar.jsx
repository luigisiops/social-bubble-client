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
                <Link className="nav-item-container" to='/coronavirus-info'>
                    <i class="fas fa-info-circle nav-icon"></i>
                    <h2 className="nav-item-text">COVID-19 Info</h2>
                </Link>
            </div>

            <div className="nav-item-container">
                <i class="fas fa-door-open nav-icon"></i>
                <h2 className="nav-item-text"><Link to='/bubble-builder'>Logout</Link></h2>
            </div>
            
        </div>
    )
}

export default Navbar
