import React from "react";
import TextInput from "./TextInput"
import CheckboxInput from "./CheckboxInput"
import DropDown from "./DropDown"
import "./form.css"

export default function PizzaForm(props) {

    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                name="name"
                label="Name"
                value={props.pizza.name}
                onChange={props.onChange}
                error={props.error.name}
            />
           
           <DropDown
                name="size"
                label="Pizza Size"
                value={props.pizza.size}
                onChange={props.onSizeSelection}
            />

        <div className="ingredients-container">
                <label className="ingredients">
                Regular Sauce
                    <input 
                        type="radio"
                        value="regular"
                        checked={props.pizza.sauce === "regular"}
                        onChange={props.onSauceSelection}
                    />  
                </label>

                <label className="ingredients">
                Spicy Sauce
                    <input
                        type="radio"
                        value="spicy"
                        checked={props.pizza.sauce === "spicy"}
                        onChange={props.onSauceSelection}
                    />      
                </label>

                <label className="ingredients">
                    Garlic Sauce
                    <input
                        type="radio"
                        value="garlic"
                        checked={props.pizza.sauce === "garlic"}
                        onChange={props.onSauceSelection}
                    />      
                </label>
            </div>
        
            <div className="ingredients-container">
                <CheckboxInput 
                    type="checkbox"
                    name="onions"
                    label="Onions"
                    checked={props.pizza.onions}
                    onChange={props.onChange}
                />
            
                <CheckboxInput 
                        type="checkbox"
                        name="pepporoni"
                        label="Pepporoni"
                        checked={props.pizza.pepporoni}
                        onChange={props.onChange}
                    />
                
                <CheckboxInput 
                        type="checkbox"
                        name="cheese"
                        label="Cheese"  
                        checked={props.pizza.cheese}
                        onChange={props.onChange}
                    />
        
                <CheckboxInput 
                        type="checkbox"
                        name="mushroom"
                        label="Mushroom"
                        checked={props.pizza.mushroom}
                        onChange={props.onChange}
                    />
                </div>
            
                <TextInput 
                    name="instructions"
                    label="Special Instructions"
                    value={props.pizza.instructions}
                    onChange={props.onChange}      
                />
            <input type="submit" value="Submit Order" className="btn" />
        </form>
    )
} 