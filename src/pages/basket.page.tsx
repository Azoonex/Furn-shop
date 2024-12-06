import { useContext, useEffect } from "react";
import { ProductContext, ShopContext } from "../context/prodoctContext";
import "../assets/sass/shop.scss";

function Basket() {
    const { addProduct, cardProduct, setCardPordoct } = useContext(ShopContext);

    useEffect(() => {
        console.log(cardProduct);
    }, [cardProduct]);

    return <section className='content'></section>;
}

export default Basket;
