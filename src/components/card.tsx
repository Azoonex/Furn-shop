import { useContext } from "react";
import { ShopContext } from "../context/prodoctContext";
import { TypePropsCardProduct } from "../types/type";
import { Button } from "./button";
import { toast } from "react-toastify";

const Card: React.FC<TypePropsCardProduct> = function Card(props) {
    const { addProduct, cardProduct, setCardPordoct } = useContext(ShopContext);

    const { bgImg, description, id, image, price, title } = props;
    return (
        <article className='card'>
            <div className='img-cont'>
                <img src={image} alt={bgImg} />
            </div>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <div className='content_price_btn'>
                <h3>{price}</h3>
                <Button
                    onClick={() => {
                        addProduct(id);
                        const findeSelected = cardProduct.findIndex(
                            (i) => i.id === id
                        );
                        if (findeSelected === -1) {
                            toast("selected " + title, {
                                style: {
                                    backgroundColor: "#1FD8A4",
                                    color: "black",
                                },
                            });
                        } else {
                            toast("Product Selected !", {
                                theme: "colored",
                                style: {
                                    backgroundColor: "#e8302a",
                                    color: "white",
                                },
                            });
                        }
                    }}>
                    by {title.substring(0, 4)}
                </Button>
            </div>
        </article>
    );
};

export default Card;
