import React, { useState, useEffect } from 'react';
import SimpleCheckbox from '../../components/SimpleCheckbox';
import PriceFilter from '../../components/Filters/PriceFilter';
import CategoryFilter from '../../components/Filters/CategoryFilter';
import ClearButton from '../../components/Buttons/ClearButton';
import LearnButton from '../../components/Buttons/LearnButton';
import LoadButton from '../../components/Buttons/LoadButton';
import ReactStars from "react-rating-stars-component";
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

function Home() {

    const history = useHistory();

    const api_key = 'TdqZTujomJfRLUYqcy3fIJ1gx6q_OMP4O535TUuAEq8HmHgt-Ra2QyFXuQH7m1hSPjlPp5Tr9oiZtl7LFEAiQr7WskG33W16LQdmbn5a_p6KfReEWk-vB3uw9IPJX3Yx';

    const [restaurants, setRestaurants] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [priceParam, setPriceParam] = useState('');
    const [categoryParam, setCategoryParam] = useState('');
    const [limitParam, setLimitParam] = useState(20);
    const [disable, setDisable] = useState('');

    useEffect(() => {
        api.get(`/v3/businesses/search?location=las-vegas&open_now=${isOpen}${priceParam}${categoryParam}&limit=${limitParam}`, {
            headers: { Authorization: `Bearer ${api_key}` }
        }).then((response) => {
            setRestaurants(response.data.businesses);
        });
    }, [isOpen, priceParam, categoryParam, limitParam]);

    function restaurant_details(id) {
        history.push(`/details/${id}`);
    };

    function onChangeCheckValue() {
        setOpen(!isOpen);
        setDisable(false);
    };

    function onChangePriceValue(e) {
        setPriceParam(e.target.value);
        setDisable(false);
    };

    function onChangeCategoryValue(e) {
        setCategoryParam(e.target.value);
        setDisable(false);
    };

    function clear() {
        history.go(0);
    };

    function increase() {
        if (limitParam >= 49) {
            setLimitParam(50);
        } else {
            setLimitParam(limitParam + 10);
        }
    };

    return (
        <div>
            <div className="home_title">
                <h2>Restaurants</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div id="home_filters">
                <div id="filter_container">
                    <p>Filter By:</p>
                    <SimpleCheckbox
                        id="open"
                        label="Open now"
                        onChange={onChangeCheckValue}
                    />
                    <PriceFilter onChange={onChangePriceValue} />
                    <CategoryFilter onChange={onChangeCategoryValue} />

                </div>

                <div id="filter_button">
                    <ClearButton onClick={clear} disabled={disable} />
                </div>
            </div>

            <div className="home_title">
                <h2>All restaurants</h2>
            </div>
            <div>
                <ul id="home_ul">
                    {restaurants.map(restaurants => (
                        <li key={restaurants.id}>
                            <img id="image" src={restaurants.image_url} />

                            <div id="restaurant_data">
                                <div>
                                    <h3>
                                        {restaurants.name}
                                    </h3>
                                </div>

                                <ReactStars
                                    size={20}
                                    color={'#D8D8D8'}
                                    activeColor={'#002B56'}
                                    value={restaurants.rating}
                                    isHalf={true}
                                    edit={false}
                                />

                                <div id="category">
                                    <p>
                                        {restaurants.categories.map(categories => (
                                            <p>{categories.title}</p>
                                        ))}
                                    </p>

                                    <p>
                                        {restaurants.price}
                                    </p>

                                    <p style={
                                        restaurants.is_closed ? {color: 'green'} : {color: 'red'}
                                    }>
                                        {restaurants.is_closed ? 'Open now' : 'Closed now'}
                                    </p>
                                </div>
                            </div>

                            <LearnButton onClick={() => restaurant_details(restaurants.id)} />
                        </li>
                    ))}
                </ul>
            </div>
            <div id="footer">
                <LoadButton onClick={increase} />
            </div>
        </div>
    );
}
export default Home;