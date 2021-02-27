import React from "react";
import Header from "./components/Header"
import Body from "./components/Body"
import "./styles/App.css"

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <hr />
        <Body />
      </div>
    )
  }
}

export default App;
