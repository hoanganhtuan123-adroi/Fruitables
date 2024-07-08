import HeroHeader1 from "../../images/HomePage/hero-img-1.png";
import HeroHeader2 from "../../images/HomePage/hero-img-2.jpg";
import "./Hero.css";
function Hero() {
    return (
        <div className="hero-header row justify-content-between align-items-center">
            <div className="col-md-12 col-lg-7  hero-left">
                <p className="hero-desc">100% Organic Foods</p>
                <h1 className="hero-title">Organic Veggies & Fruits Foods</h1>
                <form className="position-relative form-hero">
                    <input
                        className="rounded-pill w-75 form-input"
                        type="text"
                        placeholder="Search"
                    />
                    <button className="rounded-pill btn-submit">
                        Submit Now
                    </button>
                </form>
            </div>

            <div
                id="slider"
                className="carousel slide d-flex col-md-12 col-lg-5 hero-right rounded-3 p-5"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner border rounded-3">
                    <div className="carousel-item carousel-slider active">
                        <img
                            className="d-bloc w-100"
                            alt="Hero 1"
                            src={HeroHeader1}
                        />
                        <p className="btn px-4 py-2 text-white carousel-slider--desc rounded-3">Fruits</p>
                    </div>
                    <div className="carousel-item carousel-slider">
                        <img
                            className="d-bloc w-100"
                            alt="Hero 2"
                            src={HeroHeader2}
                        />
                        <p className="btn px-4 py-2 text-white carousel-slider--desc rounded-3">Vegetables</p>
                    </div>
                </div>
                <button
                    className="carousel-control-prev carousel-control ms-5"
                    type="button"
                    data-bs-target="#slider"
                    data-bs-slide="prev"
                >
                    <i className="fa-solid fa-chevron-right chevron-prev"></i>
                </button>
                <button
                    className="carousel-control-next carousel-control me-5"
                    type="button"
                    data-bs-target="#slider"
                    data-bs-slide="next"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Hero;
