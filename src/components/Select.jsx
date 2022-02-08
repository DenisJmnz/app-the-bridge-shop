import React from 'react';

const Select = ({
    children,
    className,
    options,
    id,
    onChange
}) => {
  return (<div className={`Select ${className}`} id={id}>
      <label htmlFor={`select_`+id}>{children}</label>
      <select onChange={onChange} id={`select_`+id}>
          {
              options.map(
                  (option,i)=>{
                      return(
                          <option key={i} value={option.value}>{option.label}</option>
                      )
                  }
              )
          }
      </select>
  </div>);
};

export default Select;
