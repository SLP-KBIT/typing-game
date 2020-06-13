import React from 'react';
import axios from 'axios';
import '../assets/Typing.css';

export class Typing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uncorrect: '',
      word: [],
      pos: 0,
    };
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/word`;

    axios
      .get(url)
      .then((results) => {
        const data = results.data;
        const word = data[0].name.split('');
        this.setState({
          word: word,
        });
      })
      .catch((data) => {
        console.log(data);
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.keystroke !== prevProps.keystroke) {
      if (this.props.pressKey === this.state.word[this.state.pos]) {
        this.setState({
          uncorrect: '',
          pos: this.state.pos + 1,
        });
      } else {
        this.setState({
          uncorrect: this.props.pressKey,
        });
      }
    }
  }

  render() {
    return (
      <div className="typing">
        <div className="theme">{this.state.word}</div>
        <p className="correct">{this.state.word.slice(0, this.state.pos)}</p>
        <p className="uncorrect">{this.state.uncorrect}</p>
      </div>
    );
  }
}
