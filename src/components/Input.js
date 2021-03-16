import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        const props = this.props;
        let inputError = '';
        if (!props.isValid && props.touched) {
            inputError = <span> Input is Required</span>
        }
        return (
            <div>
                <label>{props.label}</label>
                <input type={props.type} placeholder={props.placeHolder} value={props.value}
                    onChange={props.changed}
                />
                {inputError}
            </div>
        )
    }
}