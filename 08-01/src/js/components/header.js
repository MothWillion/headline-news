import React from 'react';

class Header extends React.Component {
  constructor() {
    super(); //获取父类的属性
    this.state = {
      name: 'sunjun',
      age: 18
    }
  }
  componentWillMount() {
    console.log('header will mount');
  }
  componentDidMount() {
    console.log('header did mount');
  }
  render() {
    setTimeout(() => {
      this.setState({
        name:'dingqianqian',
        age:16
      })
    }, 1000)
    return (
      <header>
        <h1>这是头部{this.state.name}{this.state.age}</h1>
      </header>
    )
  }
}

export default Header;