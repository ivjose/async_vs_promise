import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class SampleAsync extends Component {
  componentDidMount = () => {
    this.startGame();
  };

  handleWait = ms => {
    return new Promise(function(resolve) {
      setTimeout(resolve, ms);
    });
  };

  levelOne = async value => {
    console.log("You have reached Level One! New score is " + value);
    await this.handleWait(500);
    return value + 5;
  };

  levelTwo = async value => {
    console.log("You have reached Level Two! New score is " + value);
    await this.handleWait(500);
    return value + 10;
  };

  levelThree = async value => {
    console.log("You have reached Level Three! New score is " + value);
    await this.handleWait(500);
    return value + 30;
  };
 
  startGame = async () => {
    let currentScore = 5;
    console.log("Game Started Async! Current score is " + currentScore);
    let response = await Promise.all([
      this.levelOne(currentScore),
      this.levelTwo(currentScore),
      this.levelThree(currentScore)
    ]);


  };

  render() {
    return (
      <div className="App">
        <h1>Sample Async</h1>
      </div>
    );
  }
}

export default SampleAsync;
