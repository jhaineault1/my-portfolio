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
    'title': "Hobbies",
    'href': "images/hobbies.gif",
    'desc': "I live to hike, camp, ride bikes and explore. Here's a collection of hikes and camps we've done over the years.",
    'image': {
      'desc': "Serverless Portfolio",
      'src': "images/example5.jpg",
      'comment': ""
    }
  },
  {
    'title': "About Me",
    'href': "https://open.spotify.com/artist/2ZESahxZWyKcj7UqJKwdZ9",
    'desc': "I grew up on a farm down a dirt road in rural south Georgia where I spent most of my childhood learning how to raise various farm animals and exploring outside. At a young age I was fascinated with music and technology. This passion later led me to pursue a career as a touring musician/drummer in my mid 20's and later graduate with a Bachelors in Computer Information Systems. I have passionately been pursuing a career in technology ever since and are currently studying to become a Linux Systems Administrator/Site Reliability Engineer. As of 2019 I have 4 years experience as an IT technician/Jr. Sys Admin.",
    'image': {
      'desc': "example screenshot",
      'src': "images/example4.jpg",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
