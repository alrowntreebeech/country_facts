import React from "react";
import "./workingPage.css";
import { useNavigate } from "react-router-dom";

export const WorkingPage = () => {

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