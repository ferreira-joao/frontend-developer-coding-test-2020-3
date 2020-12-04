import React from 'react';

import './style.css';

function ClearButton({onClick}) {
    return(
        <button 
            id="clear_button"
            onClick={onClick}
        >
            CLEAR ALL
        </button>
    );
};

export default ClearButton;