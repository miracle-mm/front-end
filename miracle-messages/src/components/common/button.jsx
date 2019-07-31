import React from 'react';

const Button = props => {
    const {children:innerText} = props;
    return (  <button type="button" className="btn btn-md mb-2 btn-primary float-right"> {innerText}</button> );
}
 
export default Button;
