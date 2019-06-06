import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Python Projects",
    'href': "http://python-automation.jeffhaineault.info/",
    'desc': "",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example7.png",
      'comment': ""
    }
  },
  {
    'title': "Kubernetes Projects",
    'href': "images/giphy.gif",
    'desc': "",
    'image': {
      'desc': "Serverless Portfolio",
      'src': "images/example6.png",
      'comment': ""
    }
  },
  {
    'title': "Hobbies",
    'href': "https://www.reddit.com/r/fightporn/comments/bwf1yz/things_escalate_quickly_when_a_guy_gets_his_bike/?utm_source=share&utm_medium=web2x",
    'desc': "",
    'image': {
      'desc': "Serverless Portfolio",
      'src': "images/example5.jpg",
      'comment': ""
    }
  },
  {
    'title': "About Me",
    'href': "https://example.com",
    'desc': "",
    'image': {
      'desc': "example screenshot",
      'src': "images/example4.jpg",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
