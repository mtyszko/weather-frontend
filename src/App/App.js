import React, { Component } from 'react';

import LocationInfo from './components/LocationInfo/LocationInfo';
import NavBar from './components/NavBar/NavBar';
import Spinner from './components/Spinner/Spinner';
import Start from './components/Start/Start';

import {
  handleLocationData,
  getCurrentDate,
  handleForecastData,
} from '../utils/formatData';

import './App.sass';
import SearchBar from './components/SearchBar/SearchBar';

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
      //  TODO: lepsza logika mile widziana - mniej ternary operators i/lub ifów
      <>
        {loading ? <Spinner /> : console.log('stopped loading')}
        {searchPanel ? (
          <SearchBar
            handleUserSearch={this.handleUserSearch}
            handleInput={this.handleInput}
          />
        ) : null}
        <div className={`wrapper ${searchPanel ? 'blured' : null}`}>
          <NavBar
            handleUserSearch={this.handleUserSearch}
            handleInput={this.handleInput}
            searchPanel={searchPanel}
            showSearchPanel={this.showSearchPanel}
          />
          <div className='rwd__container content__wrapper'>
            <LocationInfo
              mainInfo={mainInfo}
              regionInfo={regionInfo}
              date={date}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
