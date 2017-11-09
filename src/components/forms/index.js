import React from 'react'
import {
    Input
} from './input'
class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {
                name: '',
                age: '',
                sex: '',
                address: '',
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        console.log(event)
        debugger
        console.log(this.state)
        event.preventDefault();
    }

    render() {
        return ( <form onSubmit = {
                this.handleSubmit
            } >
            <Input/>
            <button type = "submit" > 提交信息 </button> 
            </form>
        );
    }
}
export {
    Forms
}