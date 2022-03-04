import React from "react";
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png"
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png"
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png"
import Tomato from "../assets/Tomato.png";
import { motion } from "framer-motion";

export default function Customize({ ingredients, setIngredients }) {
    const onChange = (event, name) => {
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        newIngredients[name] = event;
        setIngredients(newIngredients);
        localStorage.setItem("ingredients", JSON.stringify(newIngredients));
    };

    return (
        <div style={{ display: "flex" }}>
            <div style={{ border: "2px solid black", flex: 1 }}>Images
                <div style={{ minHeight: 500, maxWidth: 500, position: "relative" }}>
                    <img src={Base} alt="Pizza Base" className="ingredients"></img>
                    <img src={Cheese} alt="Pizza Base" className="ingredients"></img>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients['olive'] ? 100 : -100,
                            opacity: ingredients['olive'] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients clickable-ingredients"
                    >
                        <img src={Olive} alt="Pizza Base" className="ingredients"></img>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients['pineapple'] ? 100 : -100,
                            opacity: ingredients["pineapple"] ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className="ingredients clickable-ingredients"
                    >
                        <img src={Pineapple} alt="Pizza Base" className="ingredients"></img>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients['mushroom'] ? 100 : -100,
                            opacity: ingredients["mushroom"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients clickable-ingredients"
                    >
                        <img src={Mushroom} alt="Pizza Base" className="ingredients"></img>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients['tomato'] ? 100 : -100,
                            opacity: ingredients["tomato"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients clickable-ingredients"
                    >
                        <img src={Tomato} alt="Pizza Base" className="ingredients"></img>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients['basil'] ? 100 : -100,
                            opacity: ingredients["basil"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients clickable-ingredients"
                    >
                        <img src={Basil} alt="Pizza Base" className="ingredients"></img>
                    </motion.div>
                </div>
            </div>
            <div style={{ border: "2px solid black", flex: 1 }}>
                <label className="container-checkbox">
                    Olive
                    <input
                        type="checkbox"
                        checked={ingredients["olive"]}
                        onChange={(event) =>
                            onChange(event.currentTarget.checked, "olive")
                        }
                    ></input>
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Pineapple
                    <input
                        type="checkbox"
                        checked={ingredients["pineapple"]}
                        onChange={(event) =>
                            onChange(event.currentTarget.checked, "pineapple")
                        }
                    ></input>
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Mushroom
                    <input
                        type="checkbox"
                        checked={ingredients["mushroom"]}
                        onChange={(event) =>
                            onChange(event.currentTarget.checked, "mushroom")
                        }
                    ></input>
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Basil
                    <input
                        type="checkbox"
                        checked={ingredients["basil"]}
                        onChange={(event) =>
                            onChange(event.currentTarget.checked, "basil")
                        }
                    ></input>
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Tomato
                    <input
                        type="checkbox"
                        checked={ingredients["tomato"]}
                        onChange={(event) =>
                            onChange(event.currentTarget.checked, "tomato")
                        }
                    ></input>
                    <span className="checkmark"></span>
                </label>
            </div>
            {JSON.stringify(ingredients)}
        </div>
    );
}