import React, { Component } from 'react';
import { database } from './firebase';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      newData: ''
    };

    this.dataRef = null;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.dataRef = database.ref('/Ahmed');

    this.dataRef.on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.dataRef.push(this.state.newData);
  }

  handleChange(event) {
    const newData = event.target.value;
    this.setState({
      newData
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre className="App-intro">
          {JSON.stringify(this.state.data, null, 2)}
        </pre>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newData} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
