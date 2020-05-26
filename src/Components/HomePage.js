import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

export default function HomePage() {

    return (
        <div className="home">
            <p>Welcome to HomeSlice! We customize our pizzas and use the freshest ingredients.</p>
            <p>Let's get started. </p>
            <Link to="/pizza">
                <button className="btn">
                    Order Pizza
                </button>
            </Link> 
        </div>
    )
}