import React from 'react';

class Body extends React.Component{
  render(){
    const username = '';
    // const username = '末世未然';
    const html = '我是html&nbsp;空格吗<div style="color:red">123</div>我也是'
    return(
      <div>
        <h1>这是页面主题{username == '' ? '默认名' : username}</h1>
        <input type="button" value="按钮" disabled={false}/>
        {/*注释*/}
        <p dangerouslySetInnerHTML={{__html:html}}></p>
      </div>
    )
  }
}

export default Body;