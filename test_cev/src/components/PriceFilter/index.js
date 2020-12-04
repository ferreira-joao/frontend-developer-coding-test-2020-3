import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import PriceCheckbox from '../Checkboxes/PriceCheckbox';

import './style.css';

function PriceFilter() {
    return (
        <div id="price_container">
            <span>Price</span>
            <FiChevronDown id="price_arrow_icon" size={20} color="#969696" />

            <div id="price_dropdown">
                <PriceCheckbox checked='checked'  id="all" label="All" value="all" />
                <PriceCheckbox id="one" label="$" value="one" />
                <PriceCheckbox id="two" label="$$" value="two" />
                <PriceCheckbox id="three" label="$$$" value="three" />
                <PriceCheckbox id="four" label="$$$$" value="four" />
            </div>
        </div>
    );
};

export default PriceFilter;