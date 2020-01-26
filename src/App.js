import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
   render() {
      return (
         <div className="App">
            Hello World!!!
            <p>Nazu love you</p>
            <p>{1+1}</p>
              <Header/>
            <Content/>
            <Major/>
         </div>
         
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

class Major extends React.Component{
  render(){
    return(
    <div className="majorarea">
      <h4>How are you ! </h4>
      <p> This my new block.</p>
    </div>
    );
  }
}
export default App;


