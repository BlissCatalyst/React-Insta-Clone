import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
          <section>
            {this.state.dummyData.map(post => (
              <PostContainer 
              key={post.username}
              post={post} />
            ))}
          </section>
      </div>
    );
  }
}

export default App;