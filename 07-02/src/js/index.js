import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <h2>这是主体部分</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>, document.getElementById('app'))