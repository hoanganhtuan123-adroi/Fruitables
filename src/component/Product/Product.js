import { useState } from "react";
import "./Product.css";
import grape from "../../images/HomePage/grapes.jpg";
import raspberries from "../../images/HomePage/raspberries.jpg";
import apricots from "../../images/HomePage/apricots.jpg";
import banana from "../../images/HomePage/banana.jpg";
import oranges from "../../images/HomePage/oranges.jpg";
import apple from "../../images/HomePage/apple.jpg";
import productService1 from "../../images/HomePage/productService1.jpg";
import productService2 from "../../images/HomePage/productService2.jpg";
import productService3 from "../../images/HomePage/productService3.jpg";

const products = [
    {
        id: 1,
        name: "Apple",
        price: "$4.99 / kg",
        tag: "Fruits",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        img: [apple],
    },
    {
        id: 2,
        name: "Grapes",
        price: "$4.99 / kg",
        tag: "Vegetables",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        img: [grape],
    },
    {
        id: 3,
        name: "Raspberries",
        price: "$4.99 / kg",
        tag: "Bread",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        img: [raspberries],
    },
    {
        id: 4,
        name: "Apricots",
        price: "$4.99 / kg",
        tag: "Meat",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        img: [apricots],
    },
    {
        id: 5,
        name: "Banana",
        price: "$4.99 / kg",
        tag: "Fruits",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        img: [banana],
    },
    {
        id: 6,
        name: "Oranges",
        price: "$4.99 / kg",
        tag: "Bread",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        img: [oranges],
    },
    {
        id: 7,
        name: "Raspberries",
        price: "$4.99 / kg",
        tag: "Vegetables",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        img: [raspberries],
    },
    {
        id: 8,
        name: "Grapes",
        price: "$4.99 / kg",
        tag: "Meat",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        img: [grape],
    },
];

function Product() {
    const [currentTag, setCurrentTag] = useState("All Products");
    const tags = ["All Products", "Vegetables", "Fruits", "Bread", "Meat"];
    const filterProduct =
        currentTag === "All Products"
            ? products
            : products.filter((product) => {
                  return product.tag === currentTag;
              });
    return (
        <div className="product">
            <div className="container">
                <div className="product-header row">
                    <h2 className="product-title col-lg-4 text-start">
                        Our Organic Products
                    </h2>
                    <div className="product-category col-lg-8 text-end">
                        <ul className="nav nav-pill">
                            {tags.map((tag) => {
                                return (
                                    <li className="nav-item">
                                        <a
                                            style={{
                                                backgroundColor:
                                                    currentTag === tag
                                                        ? "#FFB524"
                                                        : "#F4F6F8",
                                                color:
                                                    currentTag === tag
                                                        ? "#fff"
                                                        : "#45595b",
                                            }}
                                            onClick={() => {
                                                setCurrentTag(tag);
                                            }}
                                            href="#!"
                                            className="nav-link active product-btn rounded-pill m-3"
                                        >
                                            {tag}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="tab-content product-list">
                    <div className="product-item">
                        <div className="row" style={{ rowGap: "20px" }}>
                            {filterProduct.map((product) => {
                                return (
                                    <div
                                        key={product.id}
                                        className="product-card position-relative col-12 col-md-6 col-lg-4 col-xl-3 border-0 p-0 "
                                    >
                                        <div className="product-img ">
                                            <img
                                                src={product.img}
                                                alt="Product"
                                                className="rounded-bottom-0  product-thumb"
                                            />
                                            <span className="badge text-white position-absolute product-badge">
                                                {product.tag}
                                            </span>
                                        </div>
                                        <div className="product-card__body border-top-0 ">
                                            <h3 className="card-title product-name">
                                                {product.name}
                                            </h3>
                                            <p className="card-text">
                                                {product.desc}
                                            </p>
                                            <div className="product-card__price text-start mt-5">
                                                <p className="product-price">
                                                    {product.price}
                                                </p>
                                                <button className="product-add rounded-pill">
                                                    <i className="fa-solid fa-bag-shopping product-icon"></i>
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="product-service py-5">
                    <div className="product-service--list py-5">
                        <div className="product-service--item">
                            <div className="product-service--card">
                                <div className="product-service--img">
                                    <img alt="" src={productService1} />
                                </div>
                                <div className="product-service--body position-relative rounded-bottom-4 ">
                                    <div className="product-service--title position-absolute rounded-4">
                                        <p className="product-service--name text-white">
                                            Fresh Apples
                                        </p>
                                        <p className="product-service--desc">
                                            20% OFF
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-service--item bg-dark border border-dark">
                            <div className="product-service--card">
                                <div className="product-service--img bg-dark">
                                    <img alt="" src={productService2} />
                                </div>
                                <div className="bg-dark product-service--body position-relative rounded-bottom-4 ">
                                    <div className="bg-light product-service--title position-absolute rounded-4">
                                        <p className="product-service--name">
                                            Tasty Fruits
                                        </p>
                                        <p className="product-service--desc">
                                            Free delivery
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-service--item">
                            <div className="product-service--card">
                                <div className="product-service--img">
                                    <img alt="" src={productService3} />
                                </div>
                                <div className="product-service--body position-relative rounded-bottom-4 ">
                                    <div className="product-service--title position-absolute rounded-4">
                                        <p className="product-service--name text-white">
                                            Exotic Vegitable
                                        </p>
                                        <p className="product-service--desc">
                                            Discount 30$
                                        </p>
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

export default Product;
