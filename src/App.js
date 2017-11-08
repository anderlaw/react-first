import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

//引入组件Menu
import {Menu} from './components/center'
//引入device组件
import {Nav} from './components/device'
//引入greetings组件
import {LoginControl} from './components/greetings'
// 引入list组件
import { List } from './components/list' 
class App extends Component {
  constructor(props){
    super(props);

    //初始化 状态
    this.state = {
      date:new Date(),
      comments:0
    }
  }

  componentDidMount(){
    this.timerID = setInterval(()=>this.tick(),1000)

    setInterval(()=>this.setState((pre,props)=>({
      comments:pre.comments+1
    })),1000)
    
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  tick(){
    this.setState({
      date:new Date()
    })
    
  }
  render() {
    return (
      <div className="newapp" style={{ textAlign:'center'}}>
        <img src={ logo } height="80px"/>
        <h2> 现在时刻: { this.state.date.toLocaleTimeString() } </h2>
        <p>总评论数:{ this.state.comments }</p>
        <div>
          <span>引入的Nav组件</span>
          <Nav date={new Date()} />
        </div>
        <div>
          <span>引入的Menu组件</span>
          <Menu date={new Date()} />
        </div>
        <div>
          <LoginControl/>
        </div>
        <div>
          <span style={{ color:'blue' }}>引入的List组件</span>
          <List/>
        </div>
      </div>
    )
  }
}

export default App;
