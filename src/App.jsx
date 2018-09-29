import React, {Component} from 'react';
import './sass/index.scss';
import { connect } from 'react-redux';

import {fetchUser} from './redux/actions/steamActions'

@connect((state) => state)
class App extends Component {
    componentDidMount () {
        this.props.dispatch(fetchUser('undertakertfk'))
    }
    render () {
        return (
            <div>
                <h1>
                    Hola que ase
                </h1>
            </div>
        );
    }
}

export default App;