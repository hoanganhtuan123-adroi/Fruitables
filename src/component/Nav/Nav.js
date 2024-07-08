import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
    const [marginTop, setMarginTop] = useState(0);
    const [boxShadow, setBoxShadow] = useState("none");
    const [show, setShow] = useState("none");
    const myRef = useRef(null);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 55) {
                setMarginTop(-55);
                setBoxShadow("0 .5rem 1rem rgba(0, 0, 0, .15)");
                setShow("block");
            } else {
                setMarginTop(0);
                setBoxShadow("none");
                setShow("none");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div
                ref={myRef}
                style={{
                    marginTop: `${marginTop}px`,
                    transition:
                        "margin-top 0.3s,  box-shadow 0.3s, display: 0.3s ease-in",
                    boxShadow: boxShadow,
                }}
                className="fixed"
            >
                <div className="container hide-on-pc header-top p-4 d-flex justify-content-between align-items-center">
                    <div className="header-top--addr d-flex gap-4">
                        <p className="text-white fs-4">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>123 Street, New York</span>
                        </p>
                        <a
                            href="mailto:Email@Example.com"
                            className="text-white fs-4"
                        >
                            <i className="fa-solid fa-envelope"></i>
                            <span>Email@Example.com</span>
                        </a>
                    </div>
                    <div className="header-top--policy fs-4 m-2">
                        <a
                            href="#!"
                            className="header-top--link text-white m-2"
                        >
                            <span>Privacy Policy</span> /
                        </a>
                        <a
                            href="#!"
                            className="header-top--link text-white m-2"
                        >
                            <span>Terms of use</span> /
                        </a>
                        <a
                            href="#!"
                            className="header-top--link text-white m-2"
                        >
                            <span>Sales and Refunds</span>
                        </a>
                    </div>
                </div>

                <nav className="container header-bot bg-white navbar navbar-expand-lg justify-content-between pt-5 pb-5">
                    <a href="#!" className="nav-brand header-bot--brand">
                        Fruitables
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar"
                    >
                        <span className="fa fa-bars"></span>
                    </button>

                    <div
                        id="collapsibleNavbar"
                        className="collapse navbar-collapse"
                    >
                        <ul className="navbar-nav gap-4">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-link nav-item--link p-3"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/shop"
                                    className="nav-link nav-item--link p-3"
                                >
                                    Shop
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/shopdetail"
                                    className="nav-link nav-item--link p-3"
                                >
                                    Shop Details
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown btn-dropdown">
                                <NavLink
                                    to="/pages"
                                    className="nav-link nav-item--link p-3 dropdown-toggle "
                                    type="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Pages
                                </NavLink>
                                <ul className="list-dtl bg-light dropdown-menu">
                                    <li className="">
                                        <a
                                            className="dropdown-item fs-4 d-block p-3"
                                            href="#!"
                                        >
                                            Cart
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            className="dropdown-item fs-4 d-block p-3"
                                            href="#!"
                                        >
                                            Checkout
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="#!"
                                            className="dropdown-item fs-4 d-block p-3"
                                        >
                                            Testimonial
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="#!"
                                            className="dropdown-item fs-4 d-block p-3"
                                        >
                                            404 Page
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    className="nav-link nav-item--link p-3"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="hide-on-pc navbar-cta d-flex align-items-center gap-5">
                        <button className="navbar-btn-search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <a href="#!">
                            <i className="fa-solid fa-bag-shopping fa-bg-shopping__large">
                                <span className="badge bg-warning rounded-pill">
                                    3
                                </span>
                            </i>
                        </a>
                        <Link to="/login">
                            <a href="#!" type="button" className="toggle-modal">
                                <i className="fa-solid fa-user"></i>
                            </a>
                        </Link>
                    </div>
                </nav>
                <div
                    className="toTop position-fixed"
                    style={{ bottom: "40px", right: "20px", display: show }}
                >
                    <button
                        onClick={handleScrollToTop}
                        className="btn fs-4 fw-bold rounded-circle"
                        style={{
                            width: "45px",
                            height: "45px",
                            backgroundColor: "#81c408",
                        }}
                    >
                        <i class="fa-solid fa-arrow-up"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Nav;
