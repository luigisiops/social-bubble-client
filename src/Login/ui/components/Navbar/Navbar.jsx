import { Link } from 'react-router'


function Navbar() {

    return (
        <div className="navbar-container">
            <h1>NAVBAR</h1>
            <h2><Link to='/bubbles'>Bubbles</Link></h2>
            <h2><Link to='/bubble-builder'>Bubble Builder</Link></h2>
        </div>
    )
}

export default Navbar