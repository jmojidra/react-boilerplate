import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actionCreators from './../store/actions'

class Counter extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <p> Class Base </p>
                <p> Current Counter : {this.props.counter}</p>
                <div>
                    <button onClick={this.props.onIncrement} style={{ marginRight: '10px' }}> Increment</button>
                    <button onClick={this.props.onDecrement} style={{ marginRight: '10px' }}> Decrement</button>
                    <button onClick={this.props.onAdd} style={{ marginRight: '10px' }}> Add 5</button>
                    <button onClick={this.props.onSubtract} style={{ marginRight: '10px' }}> Subtract  5</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.count.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(actionCreators.increament()),
        onDecrement: () => dispatch(actionCreators.decrement()),
        onAdd: () => dispatch(actionCreators.add(5)),
        onSubtract: () => dispatch(actionCreators.subtract(5))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)