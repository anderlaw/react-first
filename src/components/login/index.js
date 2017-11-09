import React from 'react'
//引入组件
import {
    LoginIn
} from './login'
import {
    LoginOut
} from './logout'

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
                { isLogin ?(
                    <div>
                        <span> 状态:<span style={{ color:'red' }}>已登录</span> </span>
                        <LoginOut onClick= { this.handleLogout }/>
                    </div>
                    
                ) : (
                    <div>
                        <span> 状态:<span style={{ color:'red' }}>待登录</span> </span>
                        <LoginIn onClick={ this.handleLogin }/>
                    </div>
                )}

            </div>
        
        )
    }

}
export {
    LoginControl
}