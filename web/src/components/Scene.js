import React from 'react';
import { Typing } from './Typing';

export class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressKey: null,
      keystroke: 0,
      scene: 0,
      score: 0,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.next = this.next.bind(this);
    this.addScore = this.addScore.bind(this);
  }

  handleKeyPress(e) {
    this.setState({
      pressKey: e.key,
      keystroke: this.state.keystroke + 1,
    });
  }

  addScore(point) {
    this.setState((state) => ({
      score: state.score + point,
    }));
  }

  next() {
    this.setState((state) => ({
      scene: state.scene + 1,
    }));
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress, false);
  }

  render() {
    switch (this.state.scene) {
      case 0:
        return <Start pressKey={this.state.pressKey} next={this.next} />;
      case 1:
        return (
          <Typing
            pressKey={this.state.pressKey}
            keystroke={this.state.keystroke}
            addScore={this.addScore}
            next={this.next}
          />
        );
      default:
        return <End score={this.state.score} />;
    }
  }
}

class Start extends React.Component {
  componentDidUpdate() {
    if (this.props.pressKey === ' ') {
      this.props.next();
    }
  }

  render() {
    return <div>{'Space To Start'}</div>;
  }
}

function End(props) {
  return (
    <div className="end">
      <div className="score">{props.score}</div>
      {'End'}
    </div>
  );
}
