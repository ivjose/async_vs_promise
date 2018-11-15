import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Sample extends Component {
  componentDidMount = () => {
    this.startGame();
  };

  handleWait = ms => {
    return new Promise(function(resolve) {
      setTimeout(resolve, ms);
    });
  };

  levelOne = value => {
    this.handleWait(500);
    return value + 5;
  };

  levelTwo = value => {
    this.handleWait(500);
    return value + 10;
  };

  levelThree = value => {
    this.handleWait(500);
    return value + 30;
  };
  // Note that it is not needed to reference the callback function as callback when we call levelOne(), levelTwo() or levelThree(), it can be named anything.
  startGame() {
    let startGameInner = new Promise(function(resolve, reject) {
      let currentScore = 5;
      console.log("Game Started Promise! Current score is " + currentScore);
      resolve(currentScore);
    });

    // The response from startGame is automatically passed on to the function inside the subsequent then
    startGameInner
      .then(this.levelOne)
      .then(function(result) {
        // the value of result is the returned promise from levelOne function
        console.log("You have reached Level One! New score is " + result);
        return result;
      })
      .then(this.levelTwo)
      .then(function(result) {
        console.log("You have reached Level Two! New score is " + result);
        return result;
      })
      .then(this.levelThree)
      .then(function(result) {
        console.log("You have reached Level Three! New score is " + result);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Sample Promise</h1>
      </div>
    );
  }
}

export default Sample;
