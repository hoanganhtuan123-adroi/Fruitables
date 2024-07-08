import { NavLink } from "react-router-dom";
// import Product from "../../component/Product/Product";
import "./Shop.css";

function Shop() {
    return (
        <div className="shop">
            <div className="container-fluid">
                <div className="shop-header d-flex flex-column align-items-center justify-content-center">
                    <h2 className="shop--page text-white ">Shop</h2>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link shop--link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pages" className="nav-link shop--link">Pages</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shop" className="nav-link shop--link">Shop</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="container py-5">
                    <div className="shop-inner">
                        <div> 
                            <h2 className="shop--title">Fresh fruits shop</h2>
                            <div className="d-flex align-items-center justify-content-between">
                               <div className="shop-form">
                                    <input className="shop-form--input" type="text" />
                                    <button className="btn shop-form--btn">
                                        <i className="fa fa-search"></i>
                                    </button>
                               </div>
                               <div className="shop-filter">
                                <p className="shop-filter-desc">Default Sorting:</p>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
