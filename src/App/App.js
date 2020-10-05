import React, { Component } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import './App.sass';
import Spinner from './components/Spinner/Spinner';

class App extends Component {
  state = {
    loading: false,
    query: '',
    forecast: '',
  };

  handleInput = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSearch = async (e) => {
    e.preventDefault();

    const { query, forecast } = this.state;
    this.setState({ loading: true });
    // ! remove const proxyurl before npm run build
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';

    console.log(query);
    try {
      const raw = await fetch(
        // ! remove ${proxyurl} before npm run build
        `${proxyurl}https://mtdev-weather-api.herokuapp.com/api-weather?location=${query}`,
      );
      const data = await raw.json();
      console.log(data);
      this.setState({
        loading: false,
        forecast: data.forecast,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        {loading ? <Spinner /> : console.log('stopped loading')}
        <SearchBar
          handleSearch={this.handleSearch}
          handleInput={this.handleInput}
        />
        ;
      </>
    );
  }
}

export default App;
