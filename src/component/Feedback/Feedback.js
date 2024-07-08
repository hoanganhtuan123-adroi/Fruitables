import Slider from "react-slick";
import "./Feedback.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Avatar from "../../images/HomePage/avt.jpg";
function Feedback() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    return (
        <div className="feedback">
            <div className="container">
                <div className="feedback-inner">
                    <div className="feedback-header text-center">
                        <p className="feedback--title">Our Testimonial</p>
                        <h5 className="feedback--header">Our Client Saying!</h5>
                    </div>

                    <Slider {...settings}>
                        <div className="feedback-slider rounded-4 bg-light">
                            <p className="feedback-slider--desc">
                                Lorem Ipsum is simply dummy text of the printing
                                Ipsum has been the industry's standard dummy
                                text ever since the 1500s,
                            </p>

                            <div className="d-flex align-items-center  position-relative">
                                <i className="fa fa-quote-right fa-2x position-absolute"></i>

                                <div className="feedback--avt">
                                    <img
                                        alt=""
                                        src={Avatar}
                                        className="feedback--img rounded-4"
                                    />
                                </div>

                                <div className="ms-5">
                                    <p className="feedback--name">
                                        Client Name
                                    </p>
                                    <p className="feedback--pos">Profession</p>
                                    <div className="feedback-stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feedback-slider rounded-4 bg-light">
                            <p className="feedback-slider--desc">
                                Lorem Ipsum is simply dummy text of the printing
                                Ipsum has been the industry's standard dummy
                                text ever since the 1500s,
                            </p>

                            <div className="d-flex align-items-center  position-relative">
                                <i className="fa fa-quote-right fa-2x position-absolute"></i>

                                <div className="feedback--avt">
                                    <img
                                        alt=""
                                        src={Avatar}
                                        className="feedback--img rounded-4"
                                    />
                                </div>

                                <div className="ms-5">
                                    <p className="feedback--name">
                                        Client Name
                                    </p>
                                    <p className="feedback--pos">Profession</p>
                                    <div className="feedback-stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feedback-slider rounded-4 bg-light">
                            <p className="feedback-slider--desc">
                                Lorem Ipsum is simply dummy text of the printing
                                Ipsum has been the industry's standard dummy
                                text ever since the 1500s,
                            </p>

                            <div className="d-flex align-items-center  position-relative">
                                <i className="fa fa-quote-right fa-2x position-absolute"></i>

                                <div className="feedback--avt">
                                    <img
                                        alt=""
                                        src={Avatar}
                                        className="feedback--img rounded-4"
                                    />
                                </div>

                                <div className="ms-5">
                                    <p className="feedback--name">
                                        Client Name
                                    </p>
                                    <p className="feedback--pos">Profession</p>
                                    <div className="feedback-stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    {/*  
                    <div className="feedback-slider rounded-4 bg-light">
                        <p className="feedback-slider--desc">
                            Lorem Ipsum is simply dummy text of the printing
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s,
                        </p>
                        <div className="d-flex align-items-center  position-relative">
                            <i className="fa fa-quote-right fa-2x position-absolute"></i>

                            <div className="feedback--avt">
                                <img
                                    alt=""
                                    src={Avatar}
                                    className="feedback--img rounded-4"
                                />
                            </div>

                            <div className="ms-5">
                                <p className="feedback--name">Client Name</p>
                                <p className="feedback--pos">Profession</p>
                                <div className="feedback-stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Feedback;
