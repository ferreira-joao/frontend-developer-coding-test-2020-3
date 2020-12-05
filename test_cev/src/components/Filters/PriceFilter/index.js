import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import PriceRadio from '../../Radios/PriceRadio';

import './style.css';

function PriceFilter({ onChange }) {

    return (
        <div id="price_container">
            <span>Price</span>
            <FiChevronDown id="price_arrow_icon" size={20} color="#969696" />

            <div id="price_dropdown" onChange={onChange}>
                <PriceRadio label="All" value="" name="price" />
                <PriceRadio label="$" value="&price=1" name="price" />
                <PriceRadio label="$$" value="&price=2" name="price" />
                <PriceRadio label="$$$" value="&price=3" name="price" />
                <PriceRadio label="$$$$" value="&price=4" name="price" />
            </div>
        </div>
    );
};

export default PriceFilter;