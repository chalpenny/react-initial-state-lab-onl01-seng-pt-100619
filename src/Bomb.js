import React, { Component } from 'react';

export default class ImageSlider extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount 
        }
      }

    render () {
        return (
            this.state.secondsLeft > 0 ? <div>{this.state.secondsLeft} seconds left before I go boom!</div> : <div>Boom!</div>
        )
    }
}