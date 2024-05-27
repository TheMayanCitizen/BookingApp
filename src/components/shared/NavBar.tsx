import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <header>
        <h1>
            Boking <span>App</span> 
        </h1>
        
        <nav>
            <ul>
                <li>
                    <Link to="/reservation">Reservation</Link>
                </li>
                <li>
                    <Link to="/regiter">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}