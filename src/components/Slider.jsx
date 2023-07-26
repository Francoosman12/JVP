import React, { Component } from "react";
import Slider from "react-slick";
import "../css/slider.css";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024, // Cambiar la configuración para tabletas y dispositivos similares
                    settings: {
                        slidesToShow: 2, // Número de slides a mostrar en dispositivos de tamaño medio
                    }
                },
                {
                    breakpoint: 768, // Cambiar la configuración para dispositivos móviles
                    settings: {
                        slidesToShow: 1, // Número de slides a mostrar en dispositivos más pequeños (móviles)
                    }
                }
            ]
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