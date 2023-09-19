import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header className="header">
            <nav className="nav">
                <Link className="link link-active" to="/">Main</Link>
                <Link className="link" to="/projects">Projects</Link>
                <Link className="link" to="/analytics">Analytics</Link>
            </nav>

            <div className="authorization">
                <Link className="link" to="/auth/login">Sing in</Link>
                <Link className="link" to="/auth/reg">Sing up</Link>
            </div>
        </header>
        );
}
 
export default Header;