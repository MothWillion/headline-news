import React from 'react';
import ReactMixin from 'react-mixin';
import MixinLog from './mixin';

class Header extends React.Component {
  componentDidMount(){
    console.log("header")
    MixinLog.log()
  }
  render() {
    return (
      <header>
        <h1>这是头部</h1>
      </header>
    )
  }
}
ReactMixin(Header.prototype,MixinLog)
export default Header;