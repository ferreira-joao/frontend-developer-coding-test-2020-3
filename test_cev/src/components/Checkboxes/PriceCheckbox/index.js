import React from 'react';
import './style.css';

function PriceCheckbox({label, id, value, ...rest}){
    return(
        <div id="price_checkbox_component">
            <label id="price_checkbox_container" htmlFor={id}>
                {label}
            
                <input
                    {...rest}
                    id={id} 
                    type='checkbox'
                    value={value}
                />
                <span id="price_checkbox_mark">
                    <span id="price_checkbox_mark_inside"></span>
                </span>
            </label>
        </div>
    );
};

export default PriceCheckbox;