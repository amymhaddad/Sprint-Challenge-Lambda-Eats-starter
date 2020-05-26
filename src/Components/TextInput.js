import React from "react";
import PropTypes from "prop-types";

export default function TextInput(props) {
    return (
        <div className="form-group">
               <label className="label">{props.label}</label>
               <div className="field">
                   <input
                       type="text"
                       name={props.name}
                       className="form-control"
                       value={props.value}
                       onChange={props.onChange}
                       error={props.error}
                   />
               </div>
               {props.error && <div>{props.error}</div>}
            </div>
    )
}

TextInput.prototypes= {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error:PropTypes.string
};
