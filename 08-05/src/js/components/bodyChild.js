import React from 'react';

export default class Child extends React.Component{
  render(){
    return(
      <div>
        <input type="button" value="提交" onClick={this.props.changeByChild}/>
        <input type="text" onChange={this.props.inputValueChange}/>
      </div>
    )
  }
}