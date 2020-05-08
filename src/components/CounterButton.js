import React, { PureComponent } from 'react'

export default class Header extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.count === nextState.count) return false;

  //   return true;
  // }

  updateCount = () => {
    this.setState(state => {
      return { count: state.count + 1 }
    });
  }
  render() {
    console.log('Counter');
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count:{this.state.count}
      </button>
    )
  }
}

