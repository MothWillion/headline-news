import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';

class Index extends React.Component {
  testProps(){
    console.log(123);  //点击子组件的按钮可以触发这里的打印
  }
  render() {
    return (
      <div>
        <Header/>
        <Body userName="sunjun" age="20" testProps={this.testProps.bind(this)}/>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>, document.getElementById('app'))