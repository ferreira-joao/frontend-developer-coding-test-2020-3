import React from 'react';

import './style.css';

function ClearButton({onClick, disable=true}) {
    return(
        <button 
            id="clear_button"
            onClick={onClick}
            disabled={disable}
        >
            CLEAR ALL
        </button>
    );
};

export default ClearButton;