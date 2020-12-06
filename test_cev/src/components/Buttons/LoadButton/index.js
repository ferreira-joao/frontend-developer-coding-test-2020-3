import React from 'react';

import './style.css';

function LoadButton({onClick}) {
    return(
        <button 
            id="load_button"
            onClick={onClick}
        >
            LOAD MORE
        </button>
    );
};

export default LoadButton;