import React,{Component} from 'react'
import './index.css'
class Nav extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul className="list">
                <li><a href="" onClick={ this.handleClick.bind(this,'主页') }> 主页 </a></li>
                <li><a href="" onClick={ this.handleClick.bind(this,'产品') }> 产品简介 </a></li>
                <li><a href="" onClick={ this.handleClick.bind(this,'关于我们') }> 关于我们 </a></li>
            </ul>
        )   
    }
    handleClick(val,e){
        e.stopPropagation();
        e.preventDefault();
        alert('click'+val)
    }
    
}
// function Nav(props){
//     function handleClick(e){
//         e.preventDefault();
//         console.log('clicked')
//     }
//     return (
//         <ul className="list">
//             <li><a href="" onClick={ handleClick }> 主页 </a></li>
//             <li><a href="" onClick={ handleClick }> 产品简介 </a></li>
//             <li><a href="" onClick={ handleClick }> 关于我们 </a></li>
//         </ul>
//     )  
// }

export {Nav}