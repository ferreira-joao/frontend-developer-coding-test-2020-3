import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import CategoryRadio from '../../Radios/CategoryRadio';

import './style.css';

function CategoryFilter({ onChange }) {
    return(
        <div id="category_container">
            <span>Categories</span>
            <FiChevronDown id="category_arrow_icon" size={20} color="#969696" />

            <div id="category_dropdown" onChange={onChange}>
                <CategoryRadio 
                    name="category"
                    id="all" 
                    label="All" 
                    value=""
                />
                <CategoryRadio
                    name="category" 
                    id="newamerica" 
                    label="American (New)" 
                    value="&categories=newamerica" 
                />
                <CategoryRadio
                    name="category" 
                    id="tradamerican" 
                    label="American (Traditional)" 
                    value="&categories=traditionalamerica" 
                />
                <CategoryRadio
                    name="category" 
                    id="latin" 
                    label="Latin American" 
                    value="&categories=latin" 
                />
                <CategoryRadio
                    name="category" 
                    id="southern" 
                    label="Southern" 
                    value="&categories=southern" 
                />
                <CategoryRadio
                    name="category" 
                    id="pizza" 
                    label="Pizza" 
                    value="&categories=pizza" 
                />
                <CategoryRadio
                    name="category" 
                    id="burgers" 
                    label="Burgers" 
                    value="&categories=burgers" 
                />
                <CategoryRadio
                    name="category" 
                    id="sandwiches" 
                    label="Sandwiches" 
                    value="&categories=sandwiches" 
                />
                <CategoryRadio
                    name="category" 
                    id="salad" 
                    label="Salad" 
                    value="&categories=salad" 
                />
                <CategoryRadio
                    name="category" 
                    id="desserts" 
                    label="Desserts" 
                    value="&categories=desserts" 
                />
                <CategoryRadio
                    name="category" 
                    id="steak" 
                    label="Steakhouses" 
                    value="&categories=steak" 
                />
                <CategoryRadio
                    name="category" 
                    id="breakfast_brunch" 
                    label="Breakfast & Brunch" 
                    value="&categories=breakfast_brunch" 
                />
                <CategoryRadio
                    name="category" 
                    id="french" 
                    label="French" 
                    value="&categories=french" 
                />
                <CategoryRadio
                    name="category" 
                    id="mexican" 
                    label="Mexican" 
                    value="&categories=mexican" 
                />
                <CategoryRadio
                    name="category" 
                    id="tacos" 
                    label="Tacos" 
                    value="&categories=tacos" 
                />
                <CategoryRadio
                    name="category" 
                    id="japanese" 
                    label="Japanese" 
                    value="&categories=japanese" 
                />
                <CategoryRadio
                    name="category" 
                    id="chinese" 
                    label="Chinese" 
                    value="&categories=chinese" 
                />
                <CategoryRadio
                    name="category" 
                    id="korean" 
                    label="Korean" 
                    value="&categories=korean" 
                />
                <CategoryRadio
                    name="category" 
                    id="sushi" 
                    label="Sushi Bars" 
                    value="&categories=sushi" 
                />
                <CategoryRadio
                    name="category" 
                    id="seafood" 
                    label="Seafood" 
                    value="&categories=seafood" 
                />
                <CategoryRadio
                    name="category" 
                    id="noodles" 
                    label="Noodles" 
                    value="&categories=noodles" 
                />
                <CategoryRadio
                    name="category" 
                    id="wraps" 
                    label="Wraps" 
                    value="&categories=wraps" 
                />
                <CategoryRadio
                    name="category" 
                    id="bbq" 
                    label="Barbeque" 
                    value="&categories=bbq" 
                />
                <CategoryRadio
                    name="category" 
                    id="thai" 
                    label="Thai" 
                    value="&categories=thai" 
                />
                <CategoryRadio
                    name="category" 
                    id="bars" 
                    label="Bars" 
                    value="&categories=bars" 
                />
                <CategoryRadio
                    name="category" 
                    id="bars" 
                    label="Bars" 
                    value="&categories=bars" 
                />
                <CategoryRadio
                    name="category" 
                    id="cocktailbars" 
                    label="Cocktail Bars" 
                    value="&categories=cocktailbars" 
                />
                <CategoryRadio
                    name="category" 
                    id="tea" 
                    label="Tea Rooms" 
                    value="&categories=tea" 
                />
                <CategoryRadio
                    name="category" 
                    id="wine_bars" 
                    label="Wine Bars" 
                    value="&categories=wine_bars" 
                />
                <CategoryRadio
                    name="category" 
                    id="bubbletea" 
                    label="Bubble Tea" 
                    value="&categories=bubbletea" 
                />
            </div>
        </div>
    );
};

export default CategoryFilter;