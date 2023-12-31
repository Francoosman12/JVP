import React, { useEffect } from 'react';

const Tucuman = () => {
    useEffect(() => {
        // Load Visme embed script dynamically
        const script = document.createElement('script');
        script.src = '//my.visme.co/visme-embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on component unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div
                className="visme_d"
                data-title="Tucuman"
                data-url="764o8opx-tucuman"
                data-w="600"
                data-full-h="false"
                data-h="700"
                data-domain="my"
            ></div>
            <p
                style={{
                    width: '142px',
                    borderRadius: '3px',
                    padding: '3px',
                    fontSize: '12px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#314152',
                    whiteSpace: 'nowrap',
                }}
            >

                <a
                    href="https://www.visme.co/?vc=Made-With-Visme&utm_medium=Embed"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        fontWeight: '600',
                        textDecoration: 'none',
                        fontSize: '12px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#314152',
                        whiteSpace: 'nowrap',
                    }}
                >

                </a>
            </p>
        </div>
    );
};

export default Tucuman;