import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getSampleDeals } from '../actions/DealActions';
import _ from 'lodash';
import { Card, Image } from 'semantic-ui-react'

@connect(      //eslint-disable-line
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
    if(deals) {
      const { items } = deals;
      const sampleGroups = _.shuffle(items);
      const samples = sampleGroups.slice(0,6);
      const sampleCards =samples.map((sample) => {
        const { image, price, title, id } = sample.deal;
        return (
          <div className="col-xs-6 col-sm-4" key={id}>
            <Card>
              <Image src={image} className="cardImg"/>
              <Card.Content className="cardInfo">
                <Card.Header className="cardTitle">
                  {title}
                </Card.Header>
                <Card.Meta className="cardPrice">
                  <span className='date'>
                    {price}
                  </span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </div>
        )
      })
      return (
        <div className="col-xs-12 col-sm-6 col-md-9">
          <div className="row case">
            {sampleCards}
          </div>
        </div>
      );
    } else {
      return <div className="col-xs-12 col-sm-6 col-md-8"></div>
    }
  }
};
