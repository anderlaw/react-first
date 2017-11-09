import React from 'react'
import { Avatar } from '../avatar'
class UserInfor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date()
        }
    }
    render(){
        return (
            <div>
                <Avatar user={this.props.user} />
                <p>粉丝数:{ this.props.fans.count }</p>
            </div>
        )
    }
}
export { UserInfor }