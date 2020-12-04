import React from 'react';
import SimpleCheckbox from '../../components/SimpleCheckbox';
import PriceFilter from '../../components/PriceFilter';
import CategoryFilter from '../../components/CategoryFilter';
import ClearButton from '../../components/Buttons/ClearButton';

import './style.css';

function Home() {
    return (
        <div>
            <div id="home_title">
                <h1>Restaurants</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div id="home_filters">
                <div id="filter_container">
                    <p>Filter By:</p>
                    <SimpleCheckbox id="open" label="Open now" value="true" />
                    <PriceFilter />
                    <CategoryFilter />
                    
                </div>
                
                <div id="filter_button">
                    <ClearButton />
                </div>
            </div>
        </div>
    );
}
export default Home;