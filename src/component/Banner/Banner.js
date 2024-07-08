import "./Banner.css";
import BannerImg from "../../images/HomePage/baner-1.png"
function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner-box align-items-center justify-content-center">
                    <div className="banner-left">
                        <h3 className="banner--header">Fresh Exotic Fruits</h3>
                        <span className="banner--title">in Our Store</span>
                        <p className="banner--desc">
                            The generated Lorem Ipsum is therefore always free
                            from repetition injected humour, or
                            non-characteristic words etc.
                        </p>
                        <button className="btn border border-2 border-white rounded-pill banner--btn">
                            BUY
                        </button>
                    </div>
                    <div className="banner-right position-relative">
                        <div className="banner-img">
                            <img alt="" className="w-100" src={BannerImg} />
                        </div>
                        <div className="banner-price bg-white rounded-pill position-absolute d-flex align-items-center justify-content-center text-primary ">
                            <p className="banner-price--number">1</p>
                            <div className="d-flex flex-column banner-price--quantity">
                                <span>50$</span>
                                <span>kg</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
