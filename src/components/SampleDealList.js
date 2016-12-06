import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import * as ABActions from '../actions/ABActions';
@connect(
  state => ({

  }),
  dispatch => ({

  })
)
export default class SampleDealList extends Component {
  render() {
    return (
      <div >
        hello
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
