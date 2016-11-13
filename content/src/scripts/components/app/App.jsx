import React, {Component} from 'react';
import {connect} from 'react-redux';
import Draggable from 'react-draggable'
import TweenMax from 'gsap';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT'
      });
    });

    Draggable.create()
  }


  render() {
    return (

        <div className="handle">
        Count: {this.props.count}
        </div>


    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
