import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Nav} from './components/Nav'
import {MainContent} from './components/MainContent'

import './styles/app.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <MainContent/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));