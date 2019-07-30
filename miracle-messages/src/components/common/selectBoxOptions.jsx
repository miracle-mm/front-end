import React from 'react';

const Options = props => {
    const {value, name, label} = props;
    return ( 
        <option name={name}>{value}</option>
     );
}
 
export default Options;