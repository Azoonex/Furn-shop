import "../assets/sass/shop.scss";
import { Button } from "./button";

interface TypeProps {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    bgImg: string;
}

const Card: React.FC<TypeProps> = function Card(props) {
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
                <Button>by {title.substring(0, 4)}</Button>
            </div>
        </article>
    );
};

export default Card;
