import React, { Component } from 'react';
import { Link } from "react-router-dom";

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clientId: '478813816788-tdept5bokeb01atdtf9pt0h7p2eu036d.apps.googleusercontent.com'
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
