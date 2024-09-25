import { Link } from "react-router-dom";

function Header() {


    return (

            <div className="header">
                <h1>Book Bazaar</h1>
                <nav className="navbar-container">
                    <ul className="navbar-ul">
                        <li>
                            <Link to="/login"><button>Login</button></Link>
                            <button>Sign Up</button>
                        </li>
                    </ul>
                </nav>
            </div>

    );
}

export default Header;