import React, { Component } from 'react';
import { connect } from 'react-redux';
import LookingForPage from './LookingForPage';
import SampleDealList from './SampleDealList';
// import * as ABActions from '../actions/ABActions';

export default class HomePage extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="showcase">
          <div className="row">
            <LookingForPage />
            <SampleDealList />
          </div>
        </div>
      </div>
    );
  }
};

// function mapStateToProps(state) {
//   return{
//     todos: state.todos
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     x(data) {
//       dispatch(createTodo(data));
//     },
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
