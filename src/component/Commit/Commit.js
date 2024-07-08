import "./Commit.css";

function Commit() {
    return (
        <>
            <div className="commit py-5">
                <div className="container">
                    <div className="commit-inner rounded-4 p-5 bg-light">
                        <div className="row g-4 justify-content-center">
                        
                            <div className="col-xl-3 col-lg-6 col-md-6 ">
                                <div className="commit-box text-center bg-white">
                                    <i className="fa fa-users commit-box--user"></i>
                                    <h3 className="commit-title">
                                        SATISFIED CUSTOMERS
                                    </h3>
                                    <p className="commit-num">1963</p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 ">
                                <div className="commit-box text-center bg-white">
                                    <i className="fa fa-users commit-box--user"></i>
                                    <h3 className="commit-title">
                                        QUALITY OF SERVICE
                                    </h3>
                                    <p className="commit-num">99%</p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 ">
                                <div className="commit-box text-center bg-white">
                                    <i className="fa fa-users commit-box--user"></i>
                                    <h3 className="commit-title">
                                        QUALITY CERTIFICATES
                                    </h3>
                                    <p className="commit-num">33</p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 ">
                                <div className="commit-box text-center bg-white">
                                    <i className="fa fa-users commit-box--user"></i>
                                    <h3 className="commit-title">
                                        AVAILABLE PRODUCTS
                                    </h3>
                                    <p className="commit-num">789</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Commit;
