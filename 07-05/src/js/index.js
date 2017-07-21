import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';

class Index extends React.Component {
  componentWillMount(){
    console.log('index will mount');
  }
  componentDidMount(){
    console.log('index did mount');
  }
  componentWillUpdate() {
    console.log('update');
  }
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>, document.getElementById('app'))