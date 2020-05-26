import React from "react";

export default function CheckboxInput(props) {

    return (
        <div className="ingredients">
        <label className="label">{props.label}</label>
            <input
                type="checkbox"
                name={props.name}
                checked={props.checked}
                onChange={props.onChange}
            />
        </div>
    )
}