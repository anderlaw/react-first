import React,{Component} from 'react'
import './index.css'
class Nav extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const items = this.props.items.map((item,index)=><li key={index}><a href="" onClick={this.handleClick.bind(this,item)}>{ item }</a> </li>)
        return (
            <ul className="list">
                {items}
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