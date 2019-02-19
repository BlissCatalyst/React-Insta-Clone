import React from 'react';

import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
            <section>
                <img src={props.post.thumbnailUrl} alt={props.post.username} />
                <h2>{props.post.username}</h2>
                <div>
                    <img src={props.post.imageUrl} alt="DummyData Post" />
                </div>
                <div>
                    <h3>{props.post.likes} likes</h3>
                </div>
            </section>
            <section>
                {props.post.comments.map((comment, index) => (
                    <CommentSection 
                    comment={comment}
                    key={index}
                    />
                ))}
            </section>
            <div>
                <h4>{props.post.timestamp}</h4>
            </div>
        </div>
    );
}

export default PostContainer;