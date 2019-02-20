import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import PostsPage from './components/PostsPage/PostsPage.js';

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
      <div>
        <PostsPage dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;