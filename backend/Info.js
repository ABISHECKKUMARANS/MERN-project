import React from "react";
import { useParams } from "react-router-dom";

const Info = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Details Component</h1>
            <p>Received ID: {id}</p>
        </div>
    );
};

export default Info;
