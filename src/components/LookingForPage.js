import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import * as ABActions from '../actions/ABActions';

export default class LookingForPage extends Component {
  render() {
    return (
      <div className="col-md-3 col-xs-6">
        <div className="looking">
          <p className="lookingTitle">I'm looking for</p>
          <div className="lookingCase">
            <ul className="list-group">
              <li className="list-group-item"><Link to="/">All</Link></li>
              <li className="list-group-item"><Link to="/">Recommended</Link></li>
              <li className="list-group-item"><Link to="/">Food & Drink</Link></li>
              <li className="list-group-item"><Link to="/">Health & Beauty</Link></li>
              <li className="list-group-item"><Link to="/">Entertainment</Link></li>
              <li className="list-group-item"><Link to="/">Retail & Services</Link></li>
            </ul>
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
