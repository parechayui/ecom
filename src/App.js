import React from 'react';

import {HomePage} from './homepage/homepage.component';

import './App.css';



class App extends React.Component{


 render() {
    return ( <div className="App">
      <header className="App-header">

        <HomePage />

      </header>
    </div>);
  }

}

export default App;
