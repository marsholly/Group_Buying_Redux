import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getSampleDeals } from '../actions/DealActions';

@connect(
  state =>{
    return {
      deals: state.dealsReducers,
    }
  },
  dispatch => {
    return {
      getSampleDeals() {
        dispatch(getSampleDeals())
      },
    }
  }
)
export default class SampleDealList extends Component {
  componentWillMount() {
    this.props.getSampleDeals();
  }
  render() {
    const { deals } = this.props;
    console.log('deals:', deals)
    return (
      <div >
        hello
      </div>
    );
  }
};
