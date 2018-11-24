import React, {Component} from 'react'
import {connect} from 'react-redux'

import AsyncContainer from './components/asyncComponents/AsyncContainer'
import { fetchUser, fetchFriends } from './redux/actions/steamActions';
import {toggleSidebar} from './redux/actions/sidebarActions';

class User extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const user = event.target[0].value
        this.props.dispatch(fetchUser(user))
    }

    render () {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='enter your username or steam id' />
                </form>
                <AsyncContainer data={this.props.user} >
                    <RenderUser user={this.props.user.item} />
                </AsyncContainer>
            </section>
        )
    }
}

function mapStateToProps ({user, friends}) {
    return {user, friends}
}

export default connect(mapStateToProps)(User)


@connect((state) => state)
class RenderUser extends Component {


    componentDidMount () {
        this.props.dispatch(toggleSidebar())
    }

    viewFriends = () => {
        const {steamid} = this.props.user.item
        this.props.dispatch(fetchFriends(steamid))
        
    }

    render () {
        const user = this.props.user.item; 
        return (
            <section>
                <img width='400' src={user.avatarfull} />
                <h1>{user.personaname}</h1>
                <button onClick={this.viewFriends}>View Friends</button>
            </section>
        )
    }   
}