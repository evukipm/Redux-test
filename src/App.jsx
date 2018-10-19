import React, {Component} from 'react';
import './sass/index.scss';
import { connect } from 'react-redux';

import {fetchUser} from './redux/actions/steamActions'

import AsyncContainer from './components/asyncComponents/AsyncContainer'
import User from './User';

class App extends Component {
    render () {
        return (
            <User />
        );
    }
}

export default App;
