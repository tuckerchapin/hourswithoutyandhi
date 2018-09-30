import React from 'react';

import s from '../styles/app.style';
import Billboard from '../images/blank_billboard.jpg';

export default function App() {
  return (
    <div style={{
        backgroundImage: `url(${Billboard})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        width: "100%",
        height: "100%",
    }}>
        Hello
    </div>
  );
}
