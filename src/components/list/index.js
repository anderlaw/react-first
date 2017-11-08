import React,{Component} from 'react'
class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            time:1
        }
    }
    render(){
        const numbers = [1,2,3,4,5]
        const listItems = numbers.map((item,index)=> <li key={ index }> {item} </li>)
        return (
            <ul> {listItems} </ul>
        )
    }
}
export { List }