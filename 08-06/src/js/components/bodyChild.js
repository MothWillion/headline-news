import React from 'react';

export default class Child extends React.Component{
  render(){
    return(
      <div>
        <input type="button" value="提交" onClick={this.props.testProps}/>
        <div>用户ID: {this.props.userId}</div>
        <div>用户名: {this.props.userName}</div>
        <div>年龄: {this.props.age}</div>
      </div>
    )
  }
}