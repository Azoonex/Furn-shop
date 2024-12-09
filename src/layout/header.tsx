import { Link } from "react-router-dom";
import "../assets/sass/header.scss";
import { useContext } from "react";
import { ShopContext } from "../context/prodoctContext";

const Header = () => {
    const { cardProduct } = useContext(ShopContext);
    return (
        <nav className='nav_content'>
            <Link to={"./shop"}>shop</Link>
            <Link to={"./"}>home</Link>
            <Link to={"./bascket"}>
                bascket{" "}
                {cardProduct.length > 0 && (
                    <strong className=''>{cardProduct.length}</strong>
                )}
            </Link>
        </nav>
    );
};

export default Header;
