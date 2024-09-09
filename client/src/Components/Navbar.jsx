import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth" ;

export const Navbar = () => {
const { isLoggedIn } = useAuth();
    return (
        <>
        <header>
            <div className = "container">
                <div className="logo-brand">Origin.Nest</div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/services">Top Tours</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                
                { isLoggedIn ?  <li><NavLink to="/logout">Logout</NavLink></li>
                : <>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </>
                }
            </ul>
            </div>
        </header>
        </>
    );
};