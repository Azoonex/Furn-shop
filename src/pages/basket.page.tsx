import { useContext, useEffect } from "react";
import { ProductContext, ShopContext } from "../context/prodoctContext";
import "../assets/sass/shop.scss";

function Basket() {
    const { addProduct, cardProduct, setCardPordoct } = useContext(ShopContext);

    return (
        <section className='content'>
            {cardProduct.length > 0 &&
                cardProduct.map((item) => (
                    <div>
                        {item.title}
                        {item.description}
                        {item.price}
                    </div>
                ))}
        </section>
    );
}

export default Basket;
