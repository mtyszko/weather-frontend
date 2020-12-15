import React, { Component } from 'react';

import NavBar from './components/NavBar/NavBar';

import {
  handleLocationData,
  getCurrentDate,
  handleForecastData,
} from '../utils/formatData';

import './App.sass';

class App extends Component {
  state = {
    start: true,
    searchPanel: false,
    closeButton: false,
    darkMode: false,
    loading: false,
    userQuery: '',
    forecast: '',
    location: '',
    date: '',
    error: '',
  };

  handleInput = (e) => {
    this.setState({
      userQuery: e.target.value,
    });
  };

  handleUserSearch = async (e) => {
    e.preventDefault();

    const { userQuery } = this.state;

    this.setState({ loading: true });
    // FIXME:  remove const proxyurl before npm run build
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';

    try {
      const raw = await fetch(
        // FIXME:  remove ${proxyurl} before npm run build
        `${proxyurl}https://mtdev-weather-api.herokuapp.com/api-weather?location=${userQuery}`,
      );

      const data = await raw.json();
      const { error } = data;
      if (error) {
        this.setState({
          error,
          loading: false,
          searchPanel: true,
        });
        return error;
      }

      const location = handleLocationData(data.location);
      const date = getCurrentDate(data.forecast.current.dt);
      const forecast = handleForecastData(data.forecast);

      this.setState({
        loading: false,
        searchPanel: false,
        forecast,
        location,
        date,
        error: '',
      });
    } catch (error) {
      this.setState({
        error,
        searchPanel: true,
        closeButton: false,
      });
      console.log(error);
    }
  };

  showSearchPanel = () => {
    this.setState({
      searchPanel: true,
    });
  };

  render() {
    const {
      loading,
      searchPanel,
      forecast,
      date,
      error,
      location: { mainInfo, regionInfo },
    } = this.state;

    return (
      <div className={`wrapper ${searchPanel ? 'blured' : null}`}>
        <NavBar
          handleUserSearch={this.handleUserSearch}
          handleInput={this.handleInput}
          searchPanel={searchPanel}
          showSearchPanel={this.showSearchPanel}
        />
        <div className='main__container rwd__container'> tu kontent</div>
      </div>
    );
  }
}

export default App;
