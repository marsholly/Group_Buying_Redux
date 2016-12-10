import React, { Component } from 'react';
// import { connect } from 'react-redux';
import HomeSearchPage from './HomeSearchPage';
import FoodSample from './FoodSample';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeSearchPage />
        <FoodSample />
      </div>
    );
  }
}
