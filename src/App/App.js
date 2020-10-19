import React, { Component } from 'react';

import LocationInfo from './components/LocationInfo/LocationInfo';
import NavBar from './components/NavBar/NavBar';
import Spinner from './components/Spinner/Spinner';
import Start from './components/Start/Start';

import {
  handleLocationData,
  handleQuery,
  getCurrentDate,
} from '../utils/formatData';

import './App.sass';

class App extends Component {
  state = {
    searchPanel: true,
    closeButton: false,
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
    const apiQuery = handleQuery(userQuery);

    this.setState({ loading: true });
    // ! remove const proxyurl before npm run build
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';

    try {
      const raw = await fetch(
        // ! remove ${proxyurl} before npm run build
        `${proxyurl}https://mtdev-weather-api.herokuapp.com/api-weather?location=${apiQuery}`,
      );

      const data = await raw.json();

      const location = handleLocationData(data.location);
      const date = getCurrentDate(data.forecast.current.dt);
      const forecast = data.forecast;

      this.setState({
        loading: false,
        forecast,
        location,
        date,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      loading,
      forecast,
      date,
      error,
      location: { mainInfo, regionInfo },
    } = this.state;
    // const { mainInfo, aside } = location;

    return (
      <>
        {loading ? <Spinner /> : console.log('stopped loading')}
        <NavBar
          handleUserSearch={this.handleUserSearch}
          handleInput={this.handleInput}
        />
        <div className='main--wrapper rwd--container'>
          {forecast !== '' ? (
            <LocationInfo
              mainInfo={mainInfo}
              regionInfo={regionInfo}
              date={date}
            />
          ) : (
            <Start />
          )}
        </div>
      </>
    );
  }
}

export default App;
