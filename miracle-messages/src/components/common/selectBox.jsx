import React from 'react';
import Options from "./selectBoxOptions.jsx";
const SelectBox = props => {
    const {name, array ,handleChange, label} = props;
    return ( 
        <div className="form-group">
    <label>{label}</label>
    <select name={"usState"}  onChange={handleChange} className="form-control" id={name}>
        {array.map((us, index) => {
            return <Options label={label} key={`${us}_${index}`} value={us}/>
        })}
    </select>
  </div>
     );
}
 
export default SelectBox;