import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

//引入device组件
import {Nav} from './components/nav'
//引入greetings组件
import {LoginControl} from './components/login'
 
//引入 用户信息组件和头像
import { UserInfor }from './components/userinfo' 
import avatar from './avatar.jpg' 
//引入时钟组件
import { Clock } from './components/clock'
//引入表单组件
import { Forms } from './components/forms'

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="newapp">
        <h1 className="comp">引入的图片组件</h1>
        <img src={ logo } height="80px"/>
        <h1 className="comp">引入的Nav组件</h1>
        <Nav items={['主页','关于我们','产品介绍','加入我们']} />
        <h1 className="comp">引入的loginControl组件</h1>
        <div>
          <LoginControl/>
        </div>
        <h1 className="comp">引入的用户信息组件</h1>
        <UserInfor user={ { avatar:avatar,name:'何泽兵' } } fans={ {count:8 }} />
        <h1 className="comp">引入的时钟组件</h1>
        <Clock  />
        <h1 className="comp">引入的表单组件</h1>
        <Forms/>
      </div>
    )
  }
}

export default App;
