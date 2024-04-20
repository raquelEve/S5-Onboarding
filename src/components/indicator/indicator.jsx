import React from "react";
import PropTypes from "prop-types";
import { StyledIndicatorLink } from './styledIndicatorLink';
import "./indicator.css";

const Indicator = ({ totalSteps, step }) => {


    const indications = Array.from({ length: totalSteps }, (_, index) => index);
    return (
        <div className="indicator-box">
            {indications.map((i) => (
                <StyledIndicatorLink
                    key={i}
                    href="#"
                    isActive={i === step}
                // className={i === step ? "active" : "index-link"}
                ></StyledIndicatorLink>
            ))}
        </div>
    );
};

Indicator.propTypes = {
    step: PropTypes.number,
    totalSteps: PropTypes.mumber,
};

export default Indicator;
