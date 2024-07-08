import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import Banana from "../../images/HomePage/bananaOr.png";
import Tomato from "../../images/HomePage/tomato.jpg";
import Potatoes from "../../images/HomePage/potatoes.jpg";
import Parsely from "../../images/HomePage/parsely.jpg";
import Papper from "../../images/HomePage/pepper.jpg";

function Slick() {
    const products = [
        {
            id: 1,
            name: "Banana",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$7.99 / kg",
            img: Banana,
        },
        {
            id: 2,
            name: "Bell Papper",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$7.99 / kg",
            img: Papper,
        },
        {
            id: 3,
            name: "Potatoes",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$7.99 / kg",
            img: Potatoes,
        },
        {
            id: 4,
            name: "Parsely",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$7.99 / kg",
            img: Parsely,
        },
        {
            id: 5,
            name: "Potatoes",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$7.99 / kg",
            img: Potatoes,
        },
        {
            id: 6,
            name: "Tomatoes",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$7.99 / kg",
            img: Tomato,
        },
        {
            id: 7,
            name: "Parsely",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$7.99 / kg",
            img: Parsely,
        },
        {
            id: 8,
            name: "Potatoes",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: "$7.99 / kg",
            img: Potatoes,
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {products.map((product) => {
                return (
                    <>
                        <div key={product.id} className="slick-inner m-4 rounded-4">
                            <div className="slick-img">
                                <img
                                    className="slick--thumb bg-light w-100"
                                    alt={product.name}
                                    src={product.img}
                                />
                            </div>
                            <p className="badge slick--badge rounded-4">
                                Vegetables
                            </p>
                            <div className="slick-box text-center">
                                <h5 className="slick--tile">{product.name}</h5>
                                <p className="slick--desc text-start">
                                    {product.desc}
                                </p>
                                <span className="slick--price d-block text-start">
                                    {product.price}
                                </span>
                                <button className="btn d-block slick--btn rounded-pill text-start">
                                    <i class="fa fa-shopping-bag me-2"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </>
                );
            })}
        </Slider>
    );
}

export default Slick;
