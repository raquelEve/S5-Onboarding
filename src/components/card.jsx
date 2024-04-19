import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './card.css'

const Card = ({ currentCardData, nextStep }) => {
    //to call the function (nextStep) in the parent necessary to pass it through props

    const { title, description, image, bgColor } = currentCardData;
    // Importar dinámicamente la imagen
    const databgColor = { backgroundColor: bgColor }

    return (
        <div className='card'>
            {/* the images are in the public folder */}
            <div className="card-header" style={databgColor}>
                <img className="card-image" src={image} alt="" />
            </div>
            <div className='card-body'>
                <h1 className='card-title'>{title}</h1>
                <p>{description}</p>
                <div className='button-box'>
                    <button onClick={nextStep}>+</button>
                </div>
            </div>
        </div>
    );
};


Card.propTypes = {
    currentCardData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        bgColor: PropTypes.string.isRequired,
    }),
    nextStep: PropTypes.func
};


export default Card;
