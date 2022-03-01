import React from "react";
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png"
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png"
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png"
import Tomato from "../assets/Tomato.png";

export default function Customize({ ingredients }) {
//    render() {
        return (
            <div style={{ display: "flex" }}>
                <div>{JSON.stringify(ingredients)}</div>
                <div style={{ border: "2px solid black", flex: 1 }}>Images
                    <div style={{ minHeight: 500, maxWidth: 500, position: "relative" }}>
                        <img src={Base} alt="Pizza Base" height="100%" width="100%" className="ingredients"></img>
                        <img src={Cheese} alt="Pizza Base" height="100%" width="100%" className="ingredients"></img>
                        <img src={Olive} alt="Pizza Base" height="100%" width="100%" className="ingredients"></img>
                        <img src={Pineapple} alt="Pizza Base" height="100%" width="100%" className="ingredients"></img>
                        <img src={Mushroom} alt="Pizza Base" height="100%" width="100%" className="ingredients"></img>
                        <img src={Basil} alt="Pizza Base" height="100%" width="100%" className="ingredients"></img>
                        <img src={Tomato} alt="Pizza Base" height="100%" width="100%" className="ingredients"></img>
                    </div>
                </div>
                <div style={{ border: "2px solid black", flex: 1 }}>Checkbox</div>
            </div>
        );
//    }
}

//export default Customize;