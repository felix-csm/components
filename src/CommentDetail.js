import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
    return (
        <div className="comment">
            <a href="./" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
            <a href="/" className="author">{props.author}</a>
            <div className="metadata">
                <span className="date">Today at 5:42PM</span>
            </div>
            <div className="text">
                How artistic!
            </div>
            <div className="actions">
                <a href="/" className="reply">Reply</a>
            </div>
            </div>
        </div>
    );
}

export default CommentDetail;