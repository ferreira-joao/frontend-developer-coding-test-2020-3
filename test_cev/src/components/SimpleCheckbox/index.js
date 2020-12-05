import React from 'react';
import './style.css';

function SimpleCheckbox({label, id, value, onChange, ...rest}){
    return(
        <div id="checkbox_component" onChange={onChange}>
            <label id="checkbox_container" htmlFor={id}>
                {label}
            
                <input
                    {...rest}
                    id={id} 
                    type='checkbox'
                    value={value}
                />
                <span id="checkbox_mark">
                    <span id="checkbox_mark_inside"></span>
                </span>
            </label>
        </div>
    );
};

export default SimpleCheckbox;