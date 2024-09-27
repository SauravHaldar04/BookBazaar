import { Link } from "react-router-dom";

function Header() {


    return (

            <div className="header">
                <h1>Book Bazaar</h1>
                <nav className="navbar-container">
                    <ul className="navbar-ul">
                        <li>
                            <Link to="/login"><button>Login</button></Link>
                           <Link to ="/signup"><button>Sign Up</button></Link> 
                        </li>
                    </ul>
                </nav>
            </div>

    );
}

export default Header;