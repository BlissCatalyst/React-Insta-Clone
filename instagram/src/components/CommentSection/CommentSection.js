import React from 'react';

import './CommentSection.css';

const CommentSection = props => {

    return(
        <section>
            <p><strong>{props.comment.username}</strong> {props.comment.text}</p>
        </section>
    );
};

export default CommentSection;