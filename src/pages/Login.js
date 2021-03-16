import React, { Component } from 'react';
import Input from './../components/Input';
import { setAuthentication } from './../core/auth';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            formElements: [
                {
                    label: 'Email',
                    type: 'text',
                    placeHolder: 'Email',
                    validationRules: 'required',
                    isValid: false,
                    touched: false,
                    value: ''
                },
                {
                    label: 'Password',
                    type: 'password',
                    placeHolder: 'Password',
                    validationRules: 'required',
                    isValid: false,
                    touched: false,
                    value: ''
                }
            ],
            formValid: false
        }
    }

    inputChangeHandler = (event, index) => {
        const { formElements } = this.state;
        formElements[index].value = event.target.value;
        formElements[index].touched = true;
        formElements[index].isValid = event.target.value.length > 0;
        const invalidCtrls = formElements.filter((d) => !d.isValid)[0];
        this.setState({ formValid: invalidCtrls ? false : true })
        this.setState({ formElements })
    }

    loginSubmit = () => {
        console.log('loginSubmit')
        const { formElements } = this.state;
        const payload = {
            email: formElements.filter((d) => d.label === 'Email')[0].value,
            password: formElements.filter((d) => d.label === 'Password')[0].value
        }
        setAuthentication(payload);
        this.props.history.push('/home');
    }

    render() {
        const { formElements, formValid } = this.state;
        return (
            <div>
                <form>
                    <h1>Login</h1>
                    {formElements.map((f, index) => {
                        return (
                            <Input key={index} {...f} changed={(event) => { this.inputChangeHandler(event, index) }} />
                        )
                    })}
                    <button type="button" disabled={!formValid} onClick={() => this.loginSubmit()}>
                        Login
                    </button>
                </form>
            </div >
        )
    }

}

export default Login
