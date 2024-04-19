import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './card.css'

const Card = ({ currentCardData }) => {

    return (
        <div className='card'>
            <h1>{currentCardData.title}</h1>
            <p>{currentCardData.description}</p>
        </div>
    );
};


Card.propTypes = {
    currentCardData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
};


export default Card;
