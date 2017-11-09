import React from 'react'
class Input extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            sex:'',
            age:'',
            address:''
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(changedVal,event) {
        //console.log( event.target instanceof Element) //input元素.返回true
        this.setState({ [changedVal]: event.target.value.toUpperCase()});
      }
    
      handleSubmit(event) {
        console.log(this.state)
        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={(e) => this.handleChange('name',e)} />
            </label>
            <label>
              Sex:
              <input type="text" value={this.state.sex} onChange={(e) => this.handleChange('sex',e)} />
            </label>
            <label>
              Age:
              <input type="text" value={this.state.age} onChange={(e) => this.handleChange('age',e)} />
            </label>
            <label>
              Address:
              <input type="text" value={this.state.address} onChange={(e) => this.handleChange('address',e)} />
            </label>
            <button type="submit">提交信息</button>
          </form>
        );
      }
}
export { Input }