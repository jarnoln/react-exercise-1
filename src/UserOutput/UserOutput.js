import React from 'react';

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p> Username: {props.username} </p>
            <p> Line 2 </p>
        </div>
    );
}

export default userOutput;
