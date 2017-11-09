import React from 'react'
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date:new Date()
        }
    }
    //问题来了，在哪里调用呢？在组件的生命周期钩子里调用.还不如
    tick(){
        this.timerID = setInterval(()=>this.setState({ date:new Date() }),1000)
    }
    componentDidMount(){
        this.tick()
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    render(){
        return (
            <div>
                <h3>hello，world</h3>
                <p> 现在时刻:{this.state.date.toLocaleTimeString()} </p> 
            </div>
        )
    }
}
export { Clock }