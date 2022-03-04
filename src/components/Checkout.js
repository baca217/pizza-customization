import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PizzaMan from '../assets/PizzaMan.png';

export default function Checkout({ ingredients }) {
    let navigate = useNavigate();
    const [success, setSuccess] = useState(false);

    return (
        <div style={{ padding: 50, display: "flex" }}>
            <div style={{ flex: 1}}>
                <div>
                    <h1>My Ingredients</h1>
                    {Object.keys(ingredients).map((ingredient) => {
                        return (
                            ingredients[ingredient] && (
                                <p>{ingredient[0].toUpperCase() + ingredient.substring(1)}</p>
                            )
                        )
                    })}
                </div>
                <button onClick={() => setSuccess(true)}>
                    Confirm
                </button>
                <button onClick={() => navigate("/")}>
                    Go Back
                </button>
            </div>
            <div style={{ flex: 1 }}>
                {success && (
                    <div style={{ textAlign: "center" }}>
                        <img src={PizzaMan} alt="pizzaman" height="300px" />
                        <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
                            We have received your order, Thank you
                        </div>
                        <div style={{ fontFamily: "Comfortaa" }}>
                            Order #{Math.round(Math.random() * 100000)}
                        </div>
                        <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
                            Will be ready in 20-30 min.
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}