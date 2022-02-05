import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/PasswordRecovery.scss';

import logo  from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';

const RecoveryPassword = () => {
    return(
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
                <div className="email-image">
                <img src={email} alt="email" />
                </div>
                <button className="primary-button login-button">Login</button>
                <p className="resend">
                <span>Didn't receive the email?</span>
                <Link to="/">Resend</Link>
                </p>
            </div>
        </div>

    );
}

export default RecoveryPassword;