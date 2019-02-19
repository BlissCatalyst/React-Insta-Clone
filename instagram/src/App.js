import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import CommentSection from './components/CommentSection/CommentSection.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      thumbnailUrl: '',
      imageUrl: '',
      likes: 0,
      timestamp: '',
      comments: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
