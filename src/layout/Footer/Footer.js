import "./Footer.css";
import payment from "../../images/HomePage/payment.png";
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner py-5">
                    <div className="footer-top ">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-3">
                                <div className="footer-brand">
                                    <h5 className="footer-top--logo">
                                        Fruitables
                                    </h5>
                                    <p className="footer-top--desc">
                                        Fresh products
                                    </p>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <form className="footer-form">
                                    <input
                                        className="footer--input rounded-pill w-100"
                                        placeholder="Email"
                                        type="email"
                                    />
                                    <button className="btn rounded-pill footer-btn">
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>

                            <div className="col-xl-3">
                                <div className="footer-social text-end">
                                    <a
                                        className="footer-social--link"
                                        href="#!"
                                    >
                                        <i class="fab fa-twitter footer-social--icon"></i>
                                    </a>
                                    <a
                                        className="footer-social--link"
                                        href="#!"
                                    >
                                        <i class="fab fa-facebook footer-social--icon"></i>
                                    </a>
                                    <a
                                        className="footer-social--link"
                                        href="#!"
                                    >
                                        <i class="fab fa-youtube footer-social--icon"></i>
                                    </a>
                                    <a
                                        className="footer-social--link"
                                        href="#!"
                                    >
                                        <i class="fab fa-linkedin-in footer-social--icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="row justify-content-between py-5">
                            <div className="col-xl-3">
                                <div className="footer-item">
                                    <h5 className="footer-item--title">
                                        Why People Like us!
                                    </h5>
                                    <p className="footer-item--desc">
                                        typesetting, remaining essentially
                                        unchanged. It was popularised in the
                                        1960s with the like Aldus PageMaker
                                        including of Lorem Ipsum.
                                    </p>
                                    <button className="btn footer-item--btn rounded-pill">
                                        Read More
                                    </button>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="footer-item">
                                    <h5 className="footer-item--title">
                                        Shop Info
                                    </h5>
                                    <ul>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                Terms & Condition
                                            </a>
                                        </li>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                Return Policy
                                            </a>
                                        </li>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                FAQs & Help
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-3">
                                <div className="footer-item">
                                    <h5 className="footer-item--title">
                                        Account
                                    </h5>
                                    <ul>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                My Account
                                            </a>
                                        </li>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                Shop details
                                            </a>
                                        </li>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                Shopping Cart
                                            </a>
                                        </li>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                Wishlist
                                            </a>
                                        </li>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                Order History
                                            </a>
                                        </li>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                International Orders
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-3">
                                <div className="footer-item">
                                    <h5 className="footer-item--title">
                                        Contact
                                    </h5>
                                    <ul>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                Address: 1429 Netus Rd, NY 48247
                                            </a>
                                        </li>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                Email: Example@gmail.com
                                            </a>
                                        </li>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                Phone: +0123 4567 8910
                                            </a>
                                        </li>
                                        <li className="footer-item--desc">
                                            <a
                                                href="#!"
                                                className="footer-item--link"
                                            >
                                                Payment Accepted
                                            </a>
                                        </li>

                                        <img alt="" scr={payment} />
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="footer-copyright">
                            <div className="row">
                                <div className="col-xl-6">
                                    <span className="footer-copyright--desc">
                                        <i className="fas fa-copyright text-light me-2"></i>
                                        <span className="footer-copyright-site">
                                            Your Site Name
                                        </span>
                                        <span>, All right reserved.</span>
                                    </span>
                                </div>

                                <div className="col-xl-6 text-end">
                                    <span className="footer-copyright--desc">
                                        <span>Designed By </span>
                                        <span className="footer-copyright-site footer-copyright-site__underline">
                                            HTML Codex
                                        </span>
                                        <span> Distributed By </span>
                                        <span className="footer-copyright-site footer-copyright-site__underline">
                                            ThemeWagon
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
