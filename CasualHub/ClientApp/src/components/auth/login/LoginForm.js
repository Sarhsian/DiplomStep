import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { login } from "../../../actions/authActions";

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        errors: {
        },
        done: false,
        isLoading: false
    }

    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState(
                {
                    [name]: value,
                    errors
                }
            )
        }
        else {
            this.setState(
                { [name]: value })
        }
    }

    handleChange = (e) => {
        this.setStateByErrors(e.target.name, e.target.value);
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        let errors = {};
        if (this.state.email === '') errors.email = "This field is requier!"
        if (this.state.password === '') errors.password = "This field is requier!"

        const isValid = Object.keys(errors).length === 0
        if (isValid) {
            const { email, password } = this.state;
            this.setState({ isLoading: true });
            this.props.login({ Email: email, Password: password })
                .then(
                    () => this.setState({ done: true }),
                    (err) => this.setState({ errors: err.response.data, isLoading: false })
                );
        }
        else {
            this.setState({ errors });
        }

    }

    render() {
        const { errors, isLoading } = this.state;
        const form = (
            <div style={{ textAlign: 'center' }}>
                <form onSubmit={this.onSubmitForm} style={{ textAlign: 'center' }}>
                    <h1>Login</h1>

                    {
                        !!errors.invalid ?
                            <div className="alert alert-danger">
                                <strong>Danger!</strong> {errors.invalid}.
                            </div> : ''
                    }

                    <div className={classnames('form-group', { 'has-error': !!errors.email })}>
                        <label htmlFor="email">Email</label>
                        <input type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                        {!!errors.email ? <span className="help-block">{errors.email}</span> : ''}
                    </div>

                    <div className={classnames('form-group', { 'has-error': !!errors.password })}>
                        <label htmlFor="password">Пароль</label>
                        <input type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                        {!!errors.password ? <span className="help-block">{errors.password}</span> : ''}
                    </div>

                    <div className="form-group">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-warning" disabled={isLoading}>Вхід<span className="glyphicon glyphicon-send"></span></button>
                        </div>
                        <br />
                        <br />
                    </div>
                </form>
                <a href='./signUp'>Sign up</a>
            </div>
        );
        return (
            this.state.done ?
                <Redirect to="/" /> :
                form
        );
    }
}

LoginForm.propTypes =
    {
        login: PropTypes.func.isRequired
    }

export default connect(null, { login })(LoginForm);