import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.png';
import Launches from './component/Launches.js';
import Launch from './component/Launch.js';

const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
      <div className="container">
       <img src={logo} 
       alt="Spacex" 
       style={{width: 300, display: 'block', margin: 'auto' }}/>
       <Route exact path="/" component={Launches} />
       <Route exact path="/Launch/:flight_number" component={Launch} />
      </div>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;
