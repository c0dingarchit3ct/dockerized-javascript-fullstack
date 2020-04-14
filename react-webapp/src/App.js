import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    response: "",
    param: "",
  };

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://api:3001/api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //,
      // body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    console.log(body);

    this.setState({ response: body });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload !.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            Learn React
          </a>
          <form onSubmit={this.handleSubmit}>
            <p>
              <strong>Post to Server:</strong>
            </p>
            <input
              type='text'
              value={this.state.param}
              onChange={(e) => this.setState({ param: e.target.value })}
            />
            <button type='submit'>Submit</button>
          </form>
          <p>{this.state.response}</p>
        </header>
      </div>
    );
  }
}

export default App;
