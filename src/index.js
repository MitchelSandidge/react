// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from 'react-dom';


// ############## JSX ##############
// // Create a react component
// const App =  () => {
//
//     const buttonText = 'Click me';
//
//     return (
//         <div style={{backgroundColor: 'lightyellow', height: '500px'}}>
//             <h1 style={{color: 'rebeccapurple'}}>Hello React!</h1>
//             <label className="label" htmlFor="name">Enter name:</label>
//             <input id="name" type="text"/>
//             <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
//         </div>
//     );
// };
//
// //  Take the react component and show it on the screen
//
// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
//
//
// );
// ############## JSX ##############



const App  = () => {
    return (
        <div className={'ui container comments'}>
            <div className="comment">
                <a href="/" className={'avatar'}>
                    <img alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className={'author'}>
                        Sam
                    </a>
                    <div className={'metadata'}>
                        <span className={'date'}>Today at 6:00</span>
                    </div>
                    <div className="text">
                        Nice blog post!
                    </div>
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'))



