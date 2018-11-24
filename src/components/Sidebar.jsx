import React, {Component} from 'react';
import {connect} from 'react-redux';

class Sidebar extends Component {
    render () {
        if (this.props.sidebarStatus) {
            return (
                <section className='sidebar'>
                    <h2>Sidebar header</h2>
                    <img src='https://i.skyrock.net/3349/13373349/pics/470858160_small.jpg' alt='SoMBRa oSCuRa'/>
                </section>
            )
        } else {
            return null
        }
    }
}

function mapStateToProps ({sidebarStatus}) {
    return {sidebarStatus}
}

export default connect(mapStateToProps)(Sidebar)