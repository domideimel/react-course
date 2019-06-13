import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'

class App extends Component {
    render () {
        return (
            <Fragment>
                <Navbar
                    title={"Gihub Finder"}
                    icon={"fab fa-github"}
                />
                <Users/>
            </Fragment>
        );
    }
}

export default App;
