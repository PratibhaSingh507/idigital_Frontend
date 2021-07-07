import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


class DealerLogout extends Component {
    constructor(props){
        super(props);
    localStorage.removeItem("token")
    localStorage.removeItem("token1")
    }
    
    render() {
        return (
            <div>
            <h1>You Have been Logged Out </h1>
            <Link to="/">Click Here to Go back to Home</Link>
            </div>
        );
    }
}

export default DealerLogout;