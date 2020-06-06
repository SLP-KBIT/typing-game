import React from "react";

export class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressKey: null,
      isNext: false,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    this.setState({
      pressKey: e.key,
    });

    if (e.code === "Space") {
      this.setState({
        isNext: true,
      });
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  render() {
    return this.state.isNext ? (
      <Typing pressKey={this.state.pressKey} />
    ) : (
      <Start />
    );
  }
}

function Start(props) {
  return <div>{"Space To Start"}</div>;
}

function Typing(props) {
  return <div className="typing">{props.pressKey}</div>;
}
