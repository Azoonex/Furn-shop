import { Link } from "react-router-dom";
import "../assets/sass/header.scss";

const Header = () => {
    return (
        <nav className='nav_content'>
            <Link to={"./shop"}>shop</Link>
            <Link to={"./"}>home</Link>
            <Link to={"./bascket"}>bascket</Link>
        </nav>
    );
};

export default Header;
