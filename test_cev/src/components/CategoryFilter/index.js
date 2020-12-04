import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import CategoryCheckbox from '../Checkboxes/CategoryCheckbox';

import './style.css';

function CategoryFilter() {
    return(
        <div id="category_container">
            <span>Categories</span>
            <FiChevronDown id="category_arrow_icon" size={20} color="#969696" />

            <div id="category_dropdown">
            <CategoryCheckbox 
                    id="all" 
                    label="All" 
                    value="all"
                    checked='checked' 
                />
                <CategoryCheckbox 
                    id="newamerica" 
                    label="American (New)" 
                    value="newamerica" 
                />
                <CategoryCheckbox 
                    id="tradamerican" 
                    label="American (Traditional)" 
                    value="traditionalamerica" 
                />
                <CategoryCheckbox 
                    id="latin" 
                    label="Latin American" 
                    value="latin" 
                />
                <CategoryCheckbox 
                    id="southern" 
                    label="Southern" 
                    value="southern" 
                />
                <CategoryCheckbox 
                    id="pizza" 
                    label="Pizza" 
                    value="pizza" 
                />
                <CategoryCheckbox 
                    id="burgers" 
                    label="Burgers" 
                    value="burgers" 
                />
                <CategoryCheckbox 
                    id="sandwiches" 
                    label="Sandwiches" 
                    value="sandwiches" 
                />
                <CategoryCheckbox 
                    id="salad" 
                    label="Salad" 
                    value="salad" 
                />
                <CategoryCheckbox 
                    id="desserts" 
                    label="Desserts" 
                    value="desserts" 
                />
                <CategoryCheckbox 
                    id="steak" 
                    label="Steakhouses" 
                    value="steak" 
                />
                <CategoryCheckbox 
                    id="breakfast_brunch" 
                    label="Breakfast & Brunch" 
                    value="breakfast_brunch" 
                />
                <CategoryCheckbox 
                    id="french" 
                    label="French" 
                    value="french" 
                />
                <CategoryCheckbox 
                    id="mexican" 
                    label="Mexican" 
                    value="mexican" 
                />
                <CategoryCheckbox 
                    id="tacos" 
                    label="Tacos" 
                    value="tacos" 
                />
                <CategoryCheckbox 
                    id="japanese" 
                    label="Japanese" 
                    value="japanese" 
                />
                <CategoryCheckbox 
                    id="chinese" 
                    label="Chinese" 
                    value="chinese" 
                />
                <CategoryCheckbox 
                    id="korean" 
                    label="Korean" 
                    value="korean" 
                />
                <CategoryCheckbox 
                    id="sushi" 
                    label="Sushi Bars" 
                    value="sushi" 
                />
                <CategoryCheckbox 
                    id="seafood" 
                    label="Seafood" 
                    value="seafood" 
                />
                <CategoryCheckbox 
                    id="noodles" 
                    label="Noodles" 
                    value="noodles" 
                />
                <CategoryCheckbox 
                    id="wraps" 
                    label="Wraps" 
                    value="wraps" 
                />
                <CategoryCheckbox 
                    id="bbq" 
                    label="Barbeque" 
                    value="bbq" 
                />
                <CategoryCheckbox 
                    id="thai" 
                    label="Thai" 
                    value="thai" 
                />
                <CategoryCheckbox 
                    id="bars" 
                    label="Bars" 
                    value="bars" 
                />
                <CategoryCheckbox 
                    id="bars" 
                    label="Bars" 
                    value="bars" 
                />
                <CategoryCheckbox 
                    id="cocktailbars" 
                    label="Cocktail Bars" 
                    value="cocktailbars" 
                />
                <CategoryCheckbox 
                    id="tea" 
                    label="Tea Rooms" 
                    value="tea" 
                />
                <CategoryCheckbox 
                    id="wine_bars" 
                    label="Wine Bars" 
                    value="wine_bars" 
                />
                <CategoryCheckbox 
                    id="bubbletea" 
                    label="Bubble Tea" 
                    value="bubbletea" 
                />
            </div>
        </div>
    );
};

export default CategoryFilter;