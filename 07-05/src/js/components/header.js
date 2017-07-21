import React from 'react';

class Header extends React.Component{
  
  componentWillMount(){
    console.log('header will mount');
  }
  componentDidMount(){
    console.log('header did mount');
  }
  render(){
    return(
      <header>
        <h1>这是头部</h1>
      </header>
    )
  }
}

export default Header;