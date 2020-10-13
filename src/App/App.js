import React, { Component } from 'react';

import LocationInfo from './components/LocationInfo/LocationInfo';
import SearchBar from './components/SearchBar/SearchBar';
import Spinner from './components/Spinner/Spinner';

import { handleLocationData, getDate } from '../utils/formatData';

import './App.sass';

class App extends Component {
  state = {
    loading: false,
    query: '',
    date: '',
    forecast: '',
    location: '',
  };

  handleInput = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSearch = async (e) => {
    e.preventDefault();

    const { query, forecast, location } = this.state;
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

      const location = handleLocationData(data.location.location);
      const { forecast } = data.forecast;

      this.setState({
        loading: false,
        forecast,
        location,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      loading,
      date,
      location: { city, aside },
    } = this.state;
    // const { city, aside } = location;

    return (
      <>
        {loading ? <Spinner /> : console.log('stopped loading')}
        <SearchBar
          handleSearch={this.handleSearch}
          handleInput={this.handleInput}
        />
        <div className='main--wrapper rwd--size'>
          <LocationInfo city={city} aside={aside} date={date} />
        </div>
      </>
    );
  }
}

export default App;
