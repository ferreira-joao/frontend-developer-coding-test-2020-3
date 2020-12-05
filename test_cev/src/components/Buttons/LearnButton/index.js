import React from 'react';

import './style.css';

function LearnButton({onClick}) {
    return(
        <button 
            id="learn_button"
            onClick={onClick}
        >
            LEARN MORE
        </button>
    );
};

export default LearnButton;