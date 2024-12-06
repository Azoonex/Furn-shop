import "../assets/sass/home.style.scss";
import Header from "../layout/header";

function Home() {
    return (
        <section className='container'>
            <Header />
            <div className='content'>
                <h1>
                    The best home furnishings for you and <mark>furniture</mark>{" "}
                    for you
                </h1>
            </div>
        </section>
    );
}

export default Home;
