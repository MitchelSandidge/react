// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


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

            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />


        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'))



