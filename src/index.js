// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from 'react-dom';



// Create a react component
const App =  () => {
    return (
        <div>
            <h1 style={{backgroundColor: 'grey', color: 'rebeccapurple'}}>Hello React!</h1>
            <label class="label" for="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
        </div>
    );
};

//  Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')


);