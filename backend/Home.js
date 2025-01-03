import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const itemId = 42; // Example data
    return (
        <div>
            <h1>Home Component</h1>
            <Link to={`/info/${itemId}`}>Go to Details</Link>
        </div>
    );
};

export default Home;
