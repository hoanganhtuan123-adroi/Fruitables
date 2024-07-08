import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import "./Login.css";

function Login() {

    return (
        <div className="login">
            <div className="container">
                <div className="login-container">
                    <div className="login-header">
                        <div className="login-icon text-center">
                            <i class="fa-regular fa-lemon"></i>
                        </div>

                        <div className="login-inner">
                            <h3 className="login--header">LOGIN</h3>
                            <form
                              
                                action=""
                                className="login"
                                autoComplete="off"
                            >
                                <div className="login-box d-flex flex-column">
                                    <label
                                        htmlFor="email"
                                        className="login--label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        className="login--input"
                                        placeholder="Enter your email here"
                                        type="text"
                                       
                                    />
                                </div>

                                <div className="login-box d-flex flex-column">
                                    <label
                                        htmlFor="password"
                                        className="login--label"
                                    >
                                        Password
                                    </label>
                                    <div className="d-flex align-items-center position-relative">
                                        <input
                                            id="password"
                                            className="login--input"
                                            placeholder="Enter your password here"
                                            type="text"
                                           
                                        />
                                        <i
                                            class="fa-regular fa-eye-slash login--eyes-close position-absolute"
                                            style={{ right: 0, bottom: 8 }}
                                        ></i>
                                        <i
                                            hidden
                                            class="fa-regular fa-eye login--eyes-open position-absolute"
                                            style={{ right: 0, bottom: 8 }}
                                        ></i>
                                    </div>
                                </div>
                                <a
                                    href="#!"
                                    className="login--forgot-psw text-end d-block"
                                >
                                    Forgot Password
                                </a>

                                <div className="text-center mt-4">
                                    <button className="btn login-btn--login text-center">
                                        LOGIN
                                    </button>
                                </div>
                            </form>
                          
                        </div>
                    </div>

                    <div className="login-footer d-flex align-items-center justify-content-between">
                        <a href="#!" className="login--terms">
                            Terms & Conditions
                        </a>
                        <div className="login-btn">
                            <Link
                                to="/shop"
                                type="button"
                                className="btn login--btn-home"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
