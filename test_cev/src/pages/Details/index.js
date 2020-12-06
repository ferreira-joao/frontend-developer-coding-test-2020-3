import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import Map from '../../components/Map';

import api from '../../services/api';

import './style.css';

function Details() {

    let restaurantData = useParams();
    let restaurantId = restaurantData.id;

    const [restaurantInfo, setRestaurantInfo] = useState('');
    const [reviewsInfo, setReviewsInfo] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const api_key = 'TdqZTujomJfRLUYqcy3fIJ1gx6q_OMP4O535TUuAEq8HmHgt-Ra2QyFXuQH7m1hSPjlPp5Tr9oiZtl7LFEAiQr7WskG33W16LQdmbn5a_p6KfReEWk-vB3uw9IPJX3Yx';

    useEffect(() => {
        try {
            loadData();
            loadReviews();
        } catch (error) {
            console.log(error);
        }
    }, []);

    function loadData() {
        api.get(`/v3/businesses/${restaurantId}`, {
            headers: { Authorization: `Bearer ${api_key}` }
        }).then((response) => {
            setRestaurantInfo(response.data);
            setLoading(false);
        });
    };

    function loadReviews() {
        api.get(`/v3/businesses/${restaurantId}/reviews`, {
            headers: { Authorization: `Bearer ${api_key}` }
        }).then((response) => {
            setReviewsInfo(response.data.reviews);
            setLoading(false);
        });
    };

    let styles = {
        red: {
            color: 'red',
        },
        green: {
            color: 'green',
        }
    }

    const color = restaurantInfo.is_closed ? styles.green : styles.red

    return (

        <div>
            {isLoading
                ? <p>Carregando...</p> :
                <div>
                    <div id="detail_header">
                        <h2>{restaurantInfo.name}</h2>

                        <ReactStars
                            size={30}
                            color={'#D8D8D8'}
                            activeColor={'#002B56'}
                            value={restaurantInfo.rating}
                            isHalf={true}
                            edit={false}
                        />

                        <div id="categorie_container">
                            <div>
                                {restaurantInfo.categories.map(categories => (
                                    <p>{categories.title}</p>
                                ))}
                                <p>{restaurantInfo.price}</p>
                            </div>

                            <p style={color}>{restaurantInfo.is_closed ? 'Open now' : 'Closed now'}</p>
                        </div>
                    </div>

                    <div id="location_info">

                        <div id="location_map">
                            <Map
                                lat={restaurantInfo.coordinates.latitude}
                                lng={restaurantInfo.coordinates.longitude}
                            />
                            <p>{restaurantInfo.location.display_address}</p>
                        </div>

                        <div id="images_container">
                            {restaurantInfo.photos.slice(0, 2).map(photos => (
                                <img className="restaurant_image" src={photos} />
                            ))}
                        </div>
                    </div>

                    <div id="review_count">
                        <h3>{restaurantInfo.review_count} Reviews</h3>
                    </div>

                    <div id="reviews_list">
                        <ul id="detail_ul">
                            {reviewsInfo.map(reviewsInfo => (
                                <li key={reviewsInfo.id}>
                                    <div id="profile_comments">
                                        <div id="user_data">
                                            <img
                                                id="avatar_pic"
                                                src={reviewsInfo.user.image_url}
                                            />

                                            <div id="user_name_date">
                                                <p>{reviewsInfo.user.name}</p>
                                                <p>{reviewsInfo.time_created}</p>
                                            </div>
                                        </div>

                                        <div id="rating_comment">
                                            <ReactStars
                                                size={20}
                                                color={'#D8D8D8'}
                                                activeColor={'#002B56'}
                                                value={reviewsInfo.rating}
                                                isHalf={true}
                                                edit={false}
                                            />

                                            <p>
                                                {reviewsInfo.text}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>}
        </div>

    );
};

export default Details;