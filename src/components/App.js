import React from 'react';

import Sky from '../images/sky.jpg';
import BillboardTop from '../images/billboard_top.png';
import BillboardBase from '../images/billboard_base.png';



export default function App() {
  return (
    <div style={{
        backgroundImage: `url(${Sky})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: "100%",
        height: "100%",
    }}>
        <div style={{
            width: '80%',
            position: 'fixed',
            bottom: '0px',
            margin: '0% 10%',
        }}>
            {/* <img
                style={{
                    width: '50%',
                    margin: '0% 25%',
                }}
                src={BillboardTop}
            /> */}
            <div style={{
                background: "#FFF",
                padding: "10%",
            }}>
                <blockquote className="chat">
                    <p className="me">
                        YANDHI 9 29 18
                    </p>

                    <p className="them">
                        Where is Yandhi?
                    </p>

                    <p className="them">
                        It's been N hours.
                    </p>

                    {/* <p className="them">
                        And you've tweeted N times without mentioning it.
                    </p> */}
                </blockquote>
            </div>
            <img
                style={{
                    bottom: '-10px',
                    width: '100%'
                }}
                src={BillboardBase}
            />
        </div>
    </div>
  );
}
