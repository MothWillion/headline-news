import React from 'react';

class Body extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <h1>这是页面主题</h1>
        <input type="button" value="按钮" disabled={false} onClick={this.props.testProps}/>
        {/*注释*/}
        <div>{this.props.userId}</div>
      </div>
    )
  }
}

export default Body;