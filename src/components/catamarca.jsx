import React, { useEffect } from 'react';

const Catamarca = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//my.visme.co/visme-embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div
                className="visme_d"
                data-title="Blank Project"
                data-url="ojvxnrd7-blank-project"
                data-w="650"
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
                    whiteSpace: 'nowrap'
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
                        whiteSpace: 'nowrap'
                    }}
                >

                </a>
            </p>
        </>
    );
};

export default Catamarca;








