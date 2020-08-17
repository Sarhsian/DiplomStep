import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import LoginForm from './LoginForm';
class LoginPage extends Component {
    render() {
        return (
            <Row>
                <Col md={4} lg={4} xs={4}>
                    <LoginForm />
                </Col>
            </Row>
        );
    }
}
export default LoginPage;