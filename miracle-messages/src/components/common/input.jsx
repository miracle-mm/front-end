import React from 'react';

const Input = (props) => {
    const {type, name, handleChange, label} = props;

    return ( 
        <div className="form-group">
        <label>{label}</label>
        <input
          onChange={handleChange}
          name={name}
          type={type}
          className="form-control"
         
        />
      </div>
     );
}
 
export default Input;