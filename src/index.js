import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <h3 className="ui dividing header">Comments</h3>
            <CommentDetail author="Sam" />
            <CommentDetail author="Jack"/>
            <CommentDetail author="Rob"/>         
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)