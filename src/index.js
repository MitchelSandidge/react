// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";


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




// ############## COMPONENTS ##############
const App  = () => {
    return (
        <div className={'ui container comments'}>

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo={faker.date.weekday()}
                    commentText="Sams blog post"
                    avatar={faker.image.avatar()}
                    />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo={faker.date.weekday()}
                    commentText="Billys Western Wear"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo={faker.date.weekday()}
                    commentText="Ooo very hot"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>


        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'))



