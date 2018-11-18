import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <h3 className="ui dividing header">Comments</h3>
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure about this action?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Sam"
                    timeAgo="Today at 4:445PM"
                    content="Hooray!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Jack"
                    timeAgo="Today at 2:445PM" c
                    content="Temporary" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Rob"
                    timeAgo="Yesterday at 4:445PM"
                    content="Giving a shot" />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)