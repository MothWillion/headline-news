import React from 'react';
import Child from './bodyChild'

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "abc",
      age: 18
    }
  }
  changeByChild(age) {
    this.setState({name: "cde", age: age})
  }
  inputValueChange(e) {
    this.setState({age: e.target.value})
  }
  render() {
    return (
      <div>
        <h1>这是页面主题</h1>
        <Child
          changeByChild={this.changeByChild.bind(this, 99)}
          inputValueChange={this.inputValueChange.bind(this)}/>
        <div>姓名：{this.state.name}</div>
        <div>年龄：{this.state.age}</div>
      </div>
    )
  }
}

export default Body;