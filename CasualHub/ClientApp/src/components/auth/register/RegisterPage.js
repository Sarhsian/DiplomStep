import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import { register } from '../../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class RegisterPage extends Component {
    render() {
        const { register } = this.props;
        return (
            <>
                <RegisterForm register={register} />
            </>

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




export default connect(mapState, { register })(RegisterPage);