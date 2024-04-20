import React, { useState } from "react";
import PropTypes from "prop-types";

import "./card.css";
import Indicator from "./indicator/indicator";

const Card = ({ currentCardData, nextStep, prevStep, isTheLast, isTheFirst, totalSteps, step }) => {
    //to call the function (nextStep) in the parent necessary to pass it through props

    //extract the variables from the object
    const { title, description, image, bgColor } = currentCardData;

    //bg color from the object
    const databgColor = { backgroundColor: bgColor };

    return (
        <div className="card">
            {/* the images are in the public folder */}
            <div className="card-header" style={databgColor}>
                <img className="card-image" src={image} alt="" />
            </div>
            <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <p>{description}</p>
                <div className="button-box">
                    <Indicator totalSteps={totalSteps} step={step}></Indicator>
                    <div className="next-prev-buttons">
                        {!isTheLast() && <button onClick={nextStep} className="next"></button>}
                        {!isTheFirst() && <button onClick={prevStep} className="prev"></button>}
                    </div>
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
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    isTheLast: PropTypes.func,
    isTheFirst: PropTypes.func,
    totalSteps: PropTypes.number,
    step: PropTypes.number
};

export default Card;
