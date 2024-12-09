import "../assets/sass/shop.scss";
import Card from "../components/card";
import DB from "../db.json";

function Shop() {
    return (
        <section className='content'>
            <div className='container_card'>
                {DB.products.map((i) => (
                    <Card key={i.id} {...i} />
                ))}
            </div>
        </section>
    );
}

export default Shop;
