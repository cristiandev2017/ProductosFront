import React from 'react';
import image1 from '../assets/image1.png';

const Home = () => {
    return (
        <div className="text-center mt-3">
            <h4>Bienvenidos <strong>A la mejor canasta familiar del mundo</strong></h4>
            <img className="img-fluid" src={image1} alt="imagen"/>
        </div>
    )
}

export default Home;
