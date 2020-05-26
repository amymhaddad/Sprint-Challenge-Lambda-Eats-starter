import React from "react";

export default function DropDown(props) {

    return (
        <div className="form-group">
               <label>{props.label}</label>
               <div className="field">
                   <select
                       name="size"
                       className="form-control"
                       value={props.pizza}
                       onChange={props.onChange}
                   >
                       <option value="" />
                       <option value="small">Small</option>  
                       <option value="medium">Medium</option> 
                       <option value="large">Large</option>  
                       <option value="extra-large">Extra Large</option>  
                   </select>
               </div>
            </div>
    )
}