import React from 'react';

const userInput = (props) => {
    const style = {
        fontSize: '50pt',
        backgroundColor: 'green',
        color: 'red',
        border: '5px solid black'
      };
  
    return (
        <div className="userInput" style={style}>
            <input type="text" onChange={props.changed} defaultValue={props.username} />
        </div>
    );
}

export default userInput;
