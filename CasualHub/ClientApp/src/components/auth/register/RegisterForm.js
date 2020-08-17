import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import { errorMesages } from './RegisterFormLocalization';
import { registerItems } from './RegisterFormLocalization';
class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            language: this.props.lang,
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: "",
            errors: {
            },
            done: false,
            isLoading: false
        }

        //  this.handleSubmit = this.handleSubmit.bind(this);
        //  this.handleChange = this.handleChange.bind(this);
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        this.setState({ language: nextProps.lang });
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
        if (this.state.username === '') errors.username = errorMesages.erUsername;
        if (this.state.email === '') errors.email = errorMesages.erEmail;
        if (this.state.password === '') errors.password = errorMesages.erPassword;
        if (this.state.password_confirmation === '') errors.password_confirmation = errorMesages.erPassword_confirmation_empty;
        if (this.state.password !== this.state.password_confirmation) errors.password_confirmation = errorMesages.erPassword_confirmation_different;

        const isValid = Object.keys(errors).length === 0
        if (isValid) {
            const { email, password, username } = this.state;
            this.setState({ isLoading: true });
            this.props.register({ Email: email, Password: password, username: username })
                .then(
                    () => {
                        this.setState({ done: true });
                    },
                    (err) => this.setState({ errors: err.response.data, isLoading: false })
                );
        }
        else {
            this.setState({ errors });
        }
    }
    render() {

        const { errors, isLoading } = this.state;
        const { language } = this.state;
        errorMesages.setLanguage(language);
        registerItems.setLanguage(language);

        const form = (
            <div className="container">

                <div className="row">

                    <div className="col-sm"></div>

                    <div className="col-sm">
                        <form onSubmit={this.onSubmitForm} style={{ textAlign: 'center' }} >
                            <h1>{registerItems.sign_upHeader}</h1>
                            {
                                !!errors.invalid ?
                                    <div className="alert alert-danger">
                                        <strong>Danger!</strong> {errors.invalid}.
                    </div> : ''
                            }

                            <div className={classnames('form-group', { 'has-error': !!errors.username })}>
                                <label htmlFor="username">{registerItems.username}</label>
                                <input type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange} />
                                {!!errors.username ? <span className="help-block">{errors.username}</span> : ''}
                            </div>

                            <div className={classnames('form-group', { 'has-error': !!errors.email })}>
                                <label htmlFor="email">{registerItems.email}</label>
                                <input type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange} />
                                {!!errors.email ? <span className="help-block">{errors.email}</span> : ''}
                            </div>

                            <div className={classnames('form-group', { 'has-error': !!errors.password })}>
                                <label htmlFor="password">{registerItems.password}</label>
                                <input type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange} />
                                {!!errors.password ? <span className="help-block">{errors.password}</span> : ''}
                            </div>

                            <div className={classnames('form-group', { 'has-error': !!errors.password_confirmation })}>
                                <label htmlFor="Confirm password">{registerItems.confirm_password}</label>
                                <input type="password"
                                    className="form-control"
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    value={this.state.password_confirmation}
                                    onChange={this.handleChange} />
                                {!!errors.password_confirmation ? <span className="help-block">{errors.password_confirmation}</span> : ''}
                            </div>

                            <div className="form-group">
                                <div className="col-md-12" >
                                    <button type="submit" className="btn btn-warning"
                                        disabled={isLoading}>{registerItems.sign_upBtn}<span className="glyphicon glyphicon-send"></span></button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-sm"></div>
                </div>
            </div>
        );
        return (
            this.state.done ?
                <Redirect to="/" /> :
                form
        );
    }
}

const mapState = (store) => {
    return {
        lang: store.localization.lang
    }
}

RegisterForm.propTypes = {
    register: PropTypes.func.isRequired
}

export default connect(mapState)(RegisterForm);
