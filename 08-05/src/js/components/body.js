import React from 'react';
import ReactDOM from 'react-dom';
import Child from './bodyChild';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "abc",
      age: 18
    }
  }
  changeByChild(age) {
    this.setState({name: "cde", age: age});
    // 方法一：
    var myDiv = document.getElementById("name");
    ReactDOM.findDOMNode(myDiv).style.color = 'red'; //这是原始方法，不推荐！
    // 方法二：
    this.refs.age.style.color = 'green'; //推荐的操作 DOM 的方法，但不要滥用！
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
        <div id="name">姓名：{this.state.name}</div>
        <div ref="age">年龄：{this.state.age}</div>
      </div>
    )
  }
}

export default Body;