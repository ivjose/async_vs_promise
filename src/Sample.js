import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Sample extends Component {
  componentDidMount = () => {
    this.startGame();
  };

  levelOne(value, callback) {
    let newScore = value + 5;
    callback(newScore);
  }

  levelTwo(value, callback) {
    let newScore = value + 10;
    callback(newScore);
  }

  levelThree(value, callback) {
    let newScore = value + 30;
    callback(newScore);
  }

  // Note that it is not needed to reference the callback function as callback when we call levelOne(), levelTwo() or levelThree(), it can be named anything.
  startGame() {

    let _self = this
    let currentScore = 5;
    console.log("Game Started! Current score is " + currentScore);
    _self.levelOne(currentScore, function(levelOneReturnedValue) {
      console.log("Level One reached! New score is " + levelOneReturnedValue);
      _self.levelTwo(levelOneReturnedValue, function(levelTwoReturnedValue) {
        console.log("Level Two reached! New score is " + levelTwoReturnedValue);
        _self.levelThree(levelTwoReturnedValue, function(
          levelThreeReturnedValue
        ) {
          console.log(
            "Level Three reached! New score is " + levelThreeReturnedValue
          );
        });
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Sample;
