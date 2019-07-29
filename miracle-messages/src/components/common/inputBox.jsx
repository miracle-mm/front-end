import React from 'react';
const InputBox = props => {
    const {name, handleChange} = props;
    return ( 
        <div className="form-group">
        <label>Tell us about yourself</label>
        <textarea
          onChange={handleChange}
          name={name}
          id={name}
          className="form-control"
          rows="5"
        />
      </div>
     );
}
 
export default InputBox;