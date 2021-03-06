import React from 'react';
import axios from 'axios';
import '../assets/Typing.css';
import { Timer } from './Timer';

export class Typing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uncorrect: '',
      words: [],
      pos: 0,
    };
    this.fetchWords = this.fetchWords.bind(this);
    this.nextWord = this.nextWord.bind(this);
    this.judge = this.judge.bind(this);
    this.finish = this.finish.bind(this);
  }

  componentDidMount() {
    this.fetchWords();
  }

  componentDidUpdate(prevProps) {
    if (this.props.keystroke !== prevProps.keystroke) {
      this.judge();
    }
  }

  fetchWords() {
    const url = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/words`;
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        const words = data.map((word) => word.name.split(''));
        this.setState({
          words: words,
          pos: 0,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  nextWord() {
    const words = this.state.words.slice(1, this.state.words.length);
    this.setState({
      words: words,
      uncorrect: '',
      pos: 0,
    });
    if (words.length === 0) {
      this.fetchWords();
    }
  }

  judge() {
    if (this.iscorrect()) {
      const new_pos = this.state.pos + 1;
      if (new_pos === this.state.words[0].length) {
        this.nextWord();
      } else {
        this.setState({
          uncorrect: '',
          pos: new_pos,
        });
      }
    } else {
      this.setState({
        uncorrect: this.props.pressKey,
      });
    }
  }

  iscorrect() {
    return this.props.pressKey === this.state.words[0][this.state.pos];
  }

  finish() {
    this.props.next();
  }

  render() {
    return (
      <div className="game">
        <div className="timer">
          <Timer finish={this.finish} />
        </div>
        <div className="typing">
          <p className="correct">
            {this.state.words.length > 0 &&
              this.state.words[0].slice(0, this.state.pos)}
          </p>
          <p className="uncorrect">{this.state.uncorrect}</p>
          <p className="theme">
            {this.state.words.length > 0 &&
              this.state.words[0].slice(
                this.state.pos,
                this.state.words[0].length
              )}
          </p>
        </div>
      </div>
    );
  }
}
