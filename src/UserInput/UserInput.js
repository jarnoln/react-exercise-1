import React from 'react';

const userInput = (props) => {
    return (
        <div className="userInput">
            <input type="text" onChange={props.changed} defaultValue={props.username} />
        </div>
    );
}

export default userInput;
