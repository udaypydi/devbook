import React from 'react';

function Input(props) {
    const { placeholder, type, customClass } = props;

    return (
        <input 
            className={`p-2 w-full border border-gray-400 focus:outline-none focus:border-gray-600 mt-2 ${customClass}`}
            type="text" 
            placeholder={placeholder} 
            type={type}
        />
    )
}

export default Input;
