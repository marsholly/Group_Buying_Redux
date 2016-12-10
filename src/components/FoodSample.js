import React, { Component } from 'react';
import { connect } from 'react-redux';
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
export default class FoodSample extends Component {
  componentWillMount() {
    this.props.getSampleDeals();
  }
  render() {
    const { deals } = this.props;
    if(deals) {
      const { items } = deals;
      const sampleGroups = _.shuffle(items);
      const samples = sampleGroups.filter((sample) => {
        const { category } = sample.deal;
        return category === 'Food & Drink';
      });
      const sampleFoodCards = samples.map((sampleFood) => {
        const { image, price, title, id } = sampleFood.deal;
        return (
          <div className="col-xs-12 col-sm-4" key={id}>
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
            {sampleFoodCards}
          </div>
        </div>
      );
    } else {
      return <div className="col-xs-12 col-sm-6 col-md-8"></div>
    }
  }
};
