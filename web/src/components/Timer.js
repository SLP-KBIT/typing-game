import React from 'react';

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 30 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state) => ({
      time: state.time - 1,
    }));
    if (this.state.time <= 0) {
      this.props.finish();
    }
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}
