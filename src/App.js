import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

// calling addItem() function provided by connect()
  handleOnClick = event => {
    this.props.addItem()
  }

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};
// takes dispatch as an argument + returns
// an object containing the addItem function as a value
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => { dispatch(addItem()) }
//   };
// };

// mapStateToProps makes items available to App
// mapDispatchToProps makes addItem() available to App
// no mapDispatchToProps function needed w shorthand
export default connect( mapStateToProps, {addItem} )(App);
