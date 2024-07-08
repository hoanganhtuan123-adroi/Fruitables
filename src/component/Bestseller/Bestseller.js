import "./Bestseller.css";
import grape from "../../images/HomePage/grapes.jpg";
import raspberries from "../../images/HomePage/raspberries.jpg";
import apricots from "../../images/HomePage/apricots.jpg";
import banana from "../../images/HomePage/banana.jpg";
import oranges from "../../images/HomePage/oranges.jpg";
import apple from "../../images/HomePage/apple.jpg";

const products = [
    {
        id: 1,
        name: "Organic Tomato",
        price: "3.12 $",
        img: oranges,
    },
    {
        id: 2,
        name: "Organic Tomato",
        price: "3.12 $",
        img: raspberries,
    },
    {
        id: 3,
        name: "Organic Tomato",
        price: "3.12 $",
        img: banana,
    },
    {
        id: 4,
        name: "Organic Tomato",
        price: "3.12 $",
        img: apricots,
    },
    {
        id: 5,
        name: "Organic Tomato",
        price: "3.12 $",
        img: grape,
    },
    {
        id: 6,
        name: "Organic Tomato",
        price: "3.12 $",
        img: apple,
    },
];
function Bestseller() {
    return (
        <div className="bestseller py-5">
            <div className="container">
                <div className="bestseller-header d-flex flex-column align-items-center">
                    <h2 className="bestseller--title ">Bestseller Products</h2>
                    <p className="bestseller--desc text-center">
                        Latin words, combined with a handful of model sentence
                        structures, to generate Lorem Ipsum which looks
                        reasonable. 
                    </p>
                </div>

                <div className="bestseller-product">
                    <div className="row g-4 py-5">
                        {products.map((product) => {
                            return (
                                <>
                                    <div key={product.id} className="col-xl-4">
                                        <div
                                            className="bestseller-inner bg-light rounded-4"
                                        >
                                            <div className="bestseller-box">
                                                <div className="row align-items-center">
                                                    <div className="bestseller-img col-6">
                                                        <img
                                                            alt=""
                                                            src={product.img}
                                                            className="bestseller--thumb w-100"
                                                        />
                                                    </div>

                                                    <div className="bestseller-info col-6">
                                                        <p className="bestseller--name">
                                                            {product.name}
                                                        </p>
                                                        <div className="bestseller--stars">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </div>
                                                        <div className="bestseller--price">
                                                            {product.price}
                                                        </div>
                                                        <button className="btn bestseller--btn rounded-pill">
                                                            <i className="fa fa-shopping-bag bestseller--icon"></i>
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}

                        {/* Second */}
                        <div key="oranges" className="col-xl-3">
                            <div className="bestseller-box text-center">
                                <div className="">
                                    <img
                                        alt=""
                                        src={oranges}
                                        className="bestseller--thumb bestseller--thumb__second w-100"
                                    />

                                    <div className="bestseller-info bestseller-info__second">
                                        <p className="bestseller--name bestseller--name__second">
                                            Organic Tomato
                                        </p>
                                        <div className="bestseller--stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="bestseller--price">
                                            3.12 $
                                        </div>
                                        <button className="btn bestseller--btn rounded-pill">
                                            <i className="fa fa-shopping-bag bestseller--icon"></i>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div key="raspberries" className="col-xl-3">
                            <div className="bestseller-box text-center">
                                <div className="">
                                    <img
                                        alt=""
                                        src={raspberries}
                                        className="bestseller--thumb bestseller--thumb__second w-100"
                                    />

                                    <div className="bestseller-info bestseller-info__second">
                                        <p className="bestseller--name bestseller--name__second">
                                            Organic Tomato
                                        </p>
                                        <div className="bestseller--stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="bestseller--price">
                                            3.12 $
                                        </div>
                                        <button className="btn bestseller--btn rounded-pill">
                                            <i className="fa fa-shopping-bag bestseller--icon"></i>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div key="banana" className="col-xl-3">
                            <div className="bestseller-box text-center">
                                <div className="">
                                    <img
                                        alt=""
                                        src={banana}
                                        className="bestseller--thumb bestseller--thumb__second w-100"
                                    />

                                    <div className="bestseller-info bestseller-info__second">
                                        <p className="bestseller--name bestseller--name__second">
                                            Organic Tomato
                                        </p>
                                        <div className="bestseller--stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="bestseller--price">
                                            3.12 $
                                        </div>
                                        <button className="btn bestseller--btn rounded-pill">
                                            <i className="fa fa-shopping-bag bestseller--icon"></i>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div key="apricots" className="col-xl-3">
                            <div className="bestseller-box text-center">
                                <div className="">
                                    <img
                                        alt=""
                                        src={apricots}
                                        className="bestseller--thumb bestseller--thumb__second w-100"
                                    />

                                    <div className="bestseller-info bestseller-info__second">
                                        <p className="bestseller--name bestseller--name__second">
                                            Organic Tomato
                                        </p>
                                        <div className="bestseller--stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="bestseller--price">
                                            3.12 $
                                        </div>
                                        <button className="btn bestseller--btn rounded-pill">
                                            <i className="fa fa-shopping-bag bestseller--icon"></i>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bestseller;
