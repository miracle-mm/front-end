import React from 'react';

const Options = props => {
    const {value, name} = props;
    return ( 
        <option name={name}>{value}</option>
     );
}
 
export default Options;