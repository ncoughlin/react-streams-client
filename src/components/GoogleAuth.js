import React, { Component } from 'react';
import { Link } from "react-router-dom";

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clientId: process.env.GOOGLE_OAUTH2_CLIENT_ID
             });
        });
    }

    render() {
        return (
            <Link to="/" className="item">
               Google Auth
            </Link>
        );
    }
}

export default GoogleAuth;
