import React from 'react';

function ButtonComponent({ title, onClickHandler }) {
    return (
        <div>
            <button
                className="text-white bg-lime-500 p-3 rounded"
                onClick={onClickHandler}
            >
                {title}
            </button>
        </div>
    );
}

export default ButtonComponent;