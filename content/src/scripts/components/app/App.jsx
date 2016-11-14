import React, {Component} from 'react';
import {connect} from 'react-redux';
import Draggable from 'react-draggable'
import {TweenLite} from 'gsap';
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
          move : false
      };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  
  

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT'
      });
    });
  }

 onClickHandler(){
   let $circle = $('.peach');

     function moveCircle(e) {
         TweenLite.to($circle, 0.5, {
             css: {
                 left: e.pageX,
                 top: e.pageY
             }
         });
     }
     
     function stopCircle() {
         TweenLite.to($circle, 7, {
             css: {
                 left: 50,
                 top: 50
             }
         });
     }
     
    if(!this.state.move) {
        $(window).on('mousemove', moveCircle);
        this.setState({move:true});
    }else{
        $(window).on('mousemove', stopCircle);
        this.setState({move:false});
    }
 }

  render() {
    return (

        <div className="handle" >
            <div className="circle" onClick={this.onClickHandler} />
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
