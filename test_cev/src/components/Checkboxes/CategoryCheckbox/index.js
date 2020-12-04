import React from 'react';
import './style.css';

function CategoryCheckbox({label, id, value, ...rest}){
    return(
        <div id="category_checkbox_component">
            <label id="category_checkbox_container" htmlFor={id}>
                {label}
            
                <input
                    {...rest}
                    id={id} 
                    type='checkbox'
                    value={value}
                />
                <span id="category_checkbox_mark">
                    <span id="category_checkbox_mark_inside"></span>
                </span>
            </label>
        </div>
    );
};

export default CategoryCheckbox;