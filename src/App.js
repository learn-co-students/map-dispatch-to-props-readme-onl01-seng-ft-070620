import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addItem } from "./actions/items";

class App extends Component {
  handleOnClick = (event) => {
    this.props.addItem();
  };

  render() {
    debugger;
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

//mapStateToProps is replaced by adding "state => ({items: state.items})" in connect's 1st argument
// const mapStateToProps = (state) => {
//   return {
//     items: state.items,
//   };
// };

//mapDispatchToProps is replaced by { addItem } in connect's 2nd argument
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItem: () => {
//       dispatch(addItem());
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect((state) => ({ items: state.items }), { addItem })(App);
