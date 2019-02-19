import React from 'react';

import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
            {props.comments.map(comment => (
                <CommentSection comment={comment} />
            ))}
        </div>
    );
}

export default PostContainer;