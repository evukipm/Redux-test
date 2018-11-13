import React, {Component} from 'react';
import User from './User';
import Sidebar from './components/Sidebar';

class App extends Component {
    render () {
        return (
            <section className='app-root'>
                <Sidebar />
                <div className='app-container'>
                    <User />
                </div>
            </section>
        );
    }
}

export default App;
