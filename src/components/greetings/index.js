import React from 'react'
//引入组件
import {
    LoginIn
} from './loginBtn'
import {
    LoginOut
} from './logoutbtn'

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = { isLogin:false }
    }
    handleLogin(){
        this.setState({
            isLogin:true
        })
    }
    handleLogout(){
        this.setState({
            isLogin:false
        })
    }
    render(){
        const isLogin = this.state.isLogin;
        return (
            <div>
                状态:{ isLogin ?(
                    <div>
                        <span> 状态:已登录 </span>
                        <LoginIn onClick= { this.handleLogout }></LoginIn>
                    </div>
                    
                ) : (
                    <div>
                        <span> 状态:待登录 </span>
                        <LoginOut onClick={ this.handleLogin }></LoginOut>
                    </div>
                )}

            </div>
        
        )
    }

}
export {
    LoginControl
}