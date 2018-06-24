import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WetherList from '../containers/wether_list';

class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    return(
      <div className="container">
        <SearchBar />
        <WetherList />
      </div>
    );
  }
}

export default App;
