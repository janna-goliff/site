import { contourDensity } from 'd3-contour';
import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';

class WordGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
    this.handleGenerate = this.handleGenerate.bind(this);
    this.getWords = this.getWords.bind(this);
    this.getNgrams = this.getNgrams.bind(this);
    this.getCounts = this.getCounts.bind(this);
    this.generateGram = this.generateGram.bind(this);
    this.genSentence = this.genSentence.bind(this);
  }

  getWords(input) {
    const sep = /\n/;
    let userInput = input.replace(sep, ' ');
    const words = userInput.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase();
    }
    console.log(words);
    return words;
  }

  getNgrams(wordList, size) {
    let ngrams = [];
    for (let i = 0; i < wordList.length - size + 1; i++) {
      //let ngramList = [];
      let ngramList = '';
      for (let j = 0; j < size; j++) {
        ngramList += ' ' + wordList[i + j];
        //ngramList.push(wordList[i + j]);
      }
      ngrams.push(ngramList);
    }
    console.log('ngrams', ngrams);
    return ngrams;
  }

  getCounts(ngrams) {
    let counts = new Map();
    if (ngrams.length === 0) {
      return counts;
    } else {
      if (ngrams.length > 0) {
        let currngram = ngrams[0];
        for (let i = 1; i < ngrams.length; i++) {
          let nextngram = ngrams[i];
          let subCounts;
          // if key exists for ngram, use the map value
          if (counts.has(currngram) && counts.get(currngram).has(nextngram)) {
            subCounts = counts.get(currngram);
            subCounts.set(nextngram, subCounts.get(nextngram) + 1);
          } else {
            if (counts.has(currngram)) {
              subCounts = counts.get(currngram);
            } else {
              subCounts = new Map();
            }
            subCounts.set(nextngram, 2);
          }
          counts.set(currngram, subCounts);
          currngram = nextngram;
        }
      }
    }
    console.log(counts);
    return counts;
  }

  generateGram(counts, context) {
    console.log('counts', counts);
    console.log('context', context);
    // return;
    if (!counts.has(context)) {
      return '';
    }
    let contextMap = counts.get(context);
    let words = [...contextMap.keys()];
    let numOfTimes = 0;
    words.forEach((key) => {
      numOfTimes += contextMap.get(key);
    });
    console.log('num of times: ', numOfTimes);
    let probabilities = new Map();
    words.forEach((key) => {
      console.log('key: ', key);
      console.log('prob: ', contextMap.get(key) / numOfTimes);
      probabilities.set(key, contextMap.get(key) / numOfTimes);
    });
    // gets number 0 to 99
    let num = Math.floor[Math.random()];
    let sum = 0;
    let index = 0;
    if (probabilities.length > 1) {
      do {
        sum += probabilities[index];
        index++;
      } while (num <= sum && index < probabilities.length);
    }

    return words[index];
  }

  genSentence(counts, context, len) {
    let sentence = [];
    let newTup = this.generateGram(counts, context);
    console.log('next tup', newTup);
    sentence += newTup.substring(0, newTup.lastIndexOf(' '));
    let newSent = '';
    if (len > 1 && counts.has(newTup)) {
      newSent = this.genSentence(counts, newTup, len - 1);
    }
    sentence += newSent;
    console.log('sentence', sentence);
    return sentence;
  }

  handleGenerate() {
    const words = this.getWords(document.getElementById('userInput').value);
    const ngrams = this.getNgrams(words, 2);
    const counts = this.getCounts(ngrams);
    let num = Math.floor(Math.random() * ngrams.length);
    console.log(num);
    const rand = ngrams[num];
    let numOfWords = document.getElementById('wordNum').value;

    const sentence = this.genSentence(counts, rand, numOfWords);
    document.getElementById('genOutput').innerHTML = sentence;
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className='bumper'></div>
        <div className='projectContainer'>
          <h2 className='projectName'>TEXT GENERATOR</h2>
          <textarea className='generatorField' id='userInput'></textarea>
          <form>
            <label for='wordNum'>Number of words: </label>
            <input type='number' id='wordNum' name='wordNum'></input>
          </form>
          <button onClick={this.handleGenerate}>generate!</button>
          <p id='genOutput'></p>
        </div>
      </div>
    );
  }
}

export default withRouter(WordGenerator);
