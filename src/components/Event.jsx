import React from 'react';

const Event = (props) => {
    return (
        <div className='event' style={{ 'backgroundColor' : props.color }}>
            <h4>{props.name}</h4>
            <h5>{props.location}</h5>
        </div>
    )
}

export default Event;