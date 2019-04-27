import React from 'react';

const Compare = props => {
    return (
        <div>
            <p>{props.car_make}</p>
            <p>{props.car_model}</p>
            <p>{props.car_description}</p>
            <p>{props.car_mpg}</p>
        </div>
    )
}

export default Compare;