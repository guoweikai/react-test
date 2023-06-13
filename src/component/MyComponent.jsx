import React, { PureComponent } from "react";

export default class MyComponent extends PureComponent {
  state = {
    a: 1,
  };
  componentDidMount() {
    console.log('this',this.props.children)
  }
  render() {
    return (
      <div>
        <div>我是儿子1</div>
      </div>
    );
  }
}
