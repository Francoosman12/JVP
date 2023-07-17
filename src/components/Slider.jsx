import React, { Component } from "react";
import Slider from "react-slick";
import "../css/slider.css";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            // cssEase: "linear"
        };
        return (
            <div>
                {/* <h2>Proveedores</h2> */}
                <Slider {...settings}>
                    <div className="slider">
                        <img className="logos-proveedores" src="https://i.ibb.co/qk5HLJp/swift-removebg-preview.png" alt="swift" />
                    </div>
                    <div>
                        <img className="logos-proveedores" src="https://i.ibb.co/GPzyG45/arcor-removebg-preview.png" alt="arcor" />
                    </div>
                    <div>
                        <img className="logos-proveedores" src="https://i.ibb.co/qk5HLJp/swift-removebg-preview.png" alt="swift" />
                    </div>
                    <div>
                        <img className="logos-proveedores" src="https://i.ibb.co/qk5HLJp/swift-removebg-preview.png" alt="swift" />
                    </div>
                    <div>
                        <img className="logos-proveedores" src="https://i.ibb.co/qk5HLJp/swift-removebg-preview.png" alt="swift" />
                    </div>
                    <div>
                        <img className="logos-proveedores" src="https://i.ibb.co/qk5HLJp/swift-removebg-preview.png" alt="swift" />
                    </div>
                </Slider>
            </div>
        );
    }
}