import React, {Component} from 'react'
import {connect} from 'react-redux'

import AsyncContainer from './components/asyncComponents/AsyncContainer'
import { fetchUser } from './redux/actions/steamActions';

class User extends Component {

    componentDidMount () {
        this.props.dispatch(fetchUser('undertakertfk'))
    }

    onOtherUser = () => {
        this.props.dispatch(fetchUser('Lopezno1177'))
    }


    render () {
        return (
            <AsyncContainer data={this.props.user} >
                <button onClick={this.onOtherUser}>No me pulses</button>
                <RenderUser user={this.props.user.item} />
            </AsyncContainer>
        )
    }
}

function mapStateToProps ({user}) {
    return {user}
}

export default connect(mapStateToProps)(User)

const RenderUser = ({user}) => (
    <section>
        Hola que ase
        <img width='400' src={user.avatar} />
        <h1>{user.personaname}</h1>
    </section>
)