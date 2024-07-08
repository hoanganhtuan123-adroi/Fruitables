import "./Service.css";

function Service() {
    return (
        <div className="service">
            <div className="container">
                <div className="row">
                    <div className="service-item col-12 col-md-6 col-lg-3">
                        <div className="service-card  rounded">
                            <div className="service-icon d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-car-side fa-icon"></i>
                            </div>
                            <div className="service-card__body">
                                <p className="service__title">Free Shipping</p>
                                <p className="service__desc">
                                    Free on order over $300
                                </p>
                            </div>
                        </div>
                    </div>
    
                    <div className="service-item col-12 col-md-6 col-lg-3">
                        <div className="service-card  rounded">
                            <div className="service-icon d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-user-shield fa-icon"></i>
                            </div>
                            <div className="service-card__body">
                                <p className="service__title">Security Payment</p>
                                <p className="service__desc">
                                    100% security payment
                                </p>
                            </div>
                        </div>
                    </div>
    
                    <div className="service-item col-12 col-md-6 col-lg-3">
                        <div className="service-card  rounded">
                            <div className="service-icon d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-arrow-right-arrow-left fa-icon"></i>
                            </div>
                            <div className="service-card__body">
                                <p className="service__title">30 Day Return</p>
                                <p className="service__desc">
                                    30 day money guarantee
                                </p>
                            </div>
                        </div>
                    </div>
    
                    <div className="service-item col-12 col-md-6 col-lg-3">
                        <div className="service-card  rounded">
                            <div className="service-icon d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-phone fa-icon"></i>
                            </div>
                            <div className="service-card__body">
                                <p className="service__title">24/7 Support</p>
                                <p className="service__desc">
                                    Support every time fast
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
