 import React from "react"
 import classes from "./MySelect.module.css"
 

 const MySelect = ({options, defaultValue, value, change}) => {
    return (
    <select value={value}
            onChange={e => change(e.target.value)}>
     
        <option disabled value="">{defaultValue}</option>

        {options.map( opt =>
                <option value={opt.value}> 
                  {opt.name}
                </option>
        )}

    </select>
    );
 };


export default MySelect