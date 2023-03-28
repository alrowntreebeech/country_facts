import React from "react";
import "./inProgress.css";
import { useNavigate } from "react-router-dom";

export const InProgress = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="workingPage">
            <h2>Work in progress...</h2>
            <div className="imageContainer"></div>
            <button class="return" onClick={ goBack }> Go Back</button>
        </div>
    )
}