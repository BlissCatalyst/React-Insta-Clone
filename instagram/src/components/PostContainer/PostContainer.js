import React from 'react';

import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="post-container">
            <div className="user-thumb">
                <img className="user-pic" src={props.post.thumbnailUrl} alt={props.post.username} />
                <h2>{props.post.username}</h2>
            </div>
            <div className="post-pic">
                <img src={props.post.imageUrl} alt="DummyData Post" />
            </div>
            <section className="under-pic">
                <div className="post-interact">
                    <p>Heart</p><p> Bubble</p>
                </div>
                <div>
                    <p><strong>{props.post.likes} likes</strong></p>
                </div>
                    {props.post.comments.map((comment, index) => (
                        <CommentSection 
                        comment={comment}
                        key={index}
                        />
                    ))}
                <div>
                    <h4>{props.post.timestamp}</h4>
                </div>
            </section>
        </div>
    );
}

export default PostContainer;