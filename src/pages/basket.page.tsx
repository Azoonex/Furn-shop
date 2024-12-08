import { useContext, useEffect } from "react";
import "../assets/sass/shop.scss";
import { Button } from "../components/button";
import { ShopContext } from "../context/prodoctContext";

function Basket() {
    const {
        cardProduct,
        findalPrice,
        removeAllProducts,
        handleIncrementProduct,
        handleDecrement,
    } = useContext(ShopContext);

    useEffect(() => {
        console.log(cardProduct);
    }, [cardProduct]);

    return (
        <section className='content'>
            <div className='container_card'>
                {cardProduct.length > 0 &&
                    cardProduct.map((item) => (
                        <div>
                            <h1>{item.title}</h1>
                            <img src={item.image} alt={item.bgImg} />
                            <h3>{item.description}</h3>
                            <div
                                style={{
                                    display: "flex",
                                    gap: 10,
                                    alignItems: "center",
                                }}>
                                <h1>{item.price}</h1>
                                <Button
                                    onClick={() =>
                                        handleIncrementProduct(item.id)
                                    }>
                                    +
                                </Button>
                                <span style={{ fontSize: "30px" }}>
                                    {item?.size}
                                </span>
                                <Button
                                    disabled={item.size === 0}
                                    onClick={() => {
                                        handleDecrement(item.id);
                                    }}>
                                    -
                                </Button>
                            </div>
                        </div>
                    ))}
            </div>
            {cardProduct.length > 0 && (
                <div className='remove_content'>
                    <h1>finalPrice = {findalPrice}</h1>
                    <Button onClick={removeAllProducts}>clear product</Button>
                </div>
            )}
        </section>
    );
}

export default Basket;
