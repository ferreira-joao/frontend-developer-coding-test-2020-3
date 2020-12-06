import React from 'react';
import './style.css';

function PriceCheckbox({ label, value, name, ...rest }) {
    return (
        <div id="price_radio_component">
            <label id="price_radio_container">
                {label}

                <input
                    {...rest}
                    type='radio'
                    value={value}
                    name={name}
                />
                <span id="price_radio_mark">
                    <span id="price_radio_mark_inside"></span>
                </span>
            </label>
        </div>
    );
};

export default PriceCheckbox;