import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as ABActions from '../actions/ABActions';

export default class HomePage extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="showcase">
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="looking">
                <p className="lookingTitle">I'm looking for</p>
                <div className="lookingCase">
                  looking
                </div>
              </div>
            </div>
            <div className="col-md-9 col-xs-6">
              <div className="case">
                hello
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
