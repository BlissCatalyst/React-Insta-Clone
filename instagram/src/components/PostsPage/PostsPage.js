import React from 'react';

import SearchBar from '../SearchBar/SearchBar.js';
import PostContainer from '../PostContainer/PostContainer.js';

const PostsPage = props => {
    return(
        <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
          <section className="container">
            {props.dummyData.map(post => (
              <PostContainer 
              key={post.username}
              post={post} />
            ))}
          </section>
      </div>
    );
}

export default PostsPage;