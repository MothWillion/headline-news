import React from 'react';
import Child from './bodyChild';
import PropTypes from 'prop-types';
const defaultProps = {userId: 111};  //如果父组件没有传递这个属性，就使用这个默认的属性

class Body extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>这是页面主题</h1>
        <Child {...this.props}/>{/*这里可以把它的父组件的所有属性都传递给它的子组件*/}
      </div>
    )
  }
}

//数据类型验证
Body.propTypes = {
  userId: PropTypes.number.isRequired, //Body组件的 userId 必须是数字并且是必需的
  userName: PropTypes.string //userName 必须是字符串
}
Body.defaultProps = defaultProps; //默认属性

export default Body;