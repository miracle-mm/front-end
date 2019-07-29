import React from "react";

const CheckBox = (props) => {
    const {message, number, name, handleCheck} = props;
  return (
    <div className="form-group">
     
      <div className="custom-control custom-checkbox">
        <input
          onClick={handleCheck}
          name={name}
          type="checkbox"
          className="custom-control-input"
          id={number}
        />
        <label className="custom-control-label" htmlFor={number}>
          {message}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
