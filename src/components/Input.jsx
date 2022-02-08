import React from 'react';

const Input = ({ children, type, onChange, id, className }) => {
    return (<div className={`Input ${className}`} id={id}>
        <label htmlFor={`"input_${id}`}>{children}</label>
        <input type="text" id={`"input_${id}`} onChange={onChange} />
    </div>);
};

export default Input;
