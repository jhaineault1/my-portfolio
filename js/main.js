import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Python Projects",
    'href': "http://python-automation.jeffhaineault.info/",
    'desc': "This python script syncs a local directory to an AWS S3 bucket and also helps manage DNS and AWS CloudFront(AWS's content delivery network). A single command publishes this website from a local machine to an AWS S3 bucket." ,
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example7.png",
      'comment': ""
    }
  },
  {
    'title': "Kubernetes Projects",
    'href': "images/giphy.gif",
    'desc': "I am currently in the process of moving this site into Kubernetes containers.",
    'image': {
      'desc': "Serverless Portfolio",
      'src': "images/example6.png",
      'comment': ""
    }
  },
  {
    'title': "Hobbies",
    'href': "https://www.reddit.com/r/fightporn/comments/bwf1yz/things_escalate_quickly_when_a_guy_gets_his_bike/?utm_source=share&utm_medium=web2x",
    'desc': "I live to hike, camp, ride bikes and explore. Here's a collection of hikes and camps we've done over the years.",
    'image': {
      'desc': "Serverless Portfolio",
      'src': "images/example5.jpg",
      'comment': ""
    }
  },
  {
    'title': "About Me",
    'href': "https://example.com",
    'desc': "I grew up on a farm down a dirt road in rural south Georgia where I spent most of my childhood learning how to raise various farm animals and exploring outside. As a young teenager I became fascinated with music and technology which led me to playing drums and conquering video games. This passion later led me to pursue a career as a touring musician in my mid 20's and graduate with a Bachelors in Computer Information Systems. I have passionately been pursuing a career in technology ever since and are currently studying to become a Site Reliability Engineer. As of 2019 I have 4 years experience as an IT technician/Jr. Sys Admin.",
    'image': {
      'desc': "example screenshot",
      'src': "images/example4.jpg",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
