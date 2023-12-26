



/**
 *parcel is beast
 HMR- HOT MODULE RELOADING 
 PARCEL KEEPS TRACK FILE ANF IF YOU CHANGE ANY FILE IT AUTOMAYETICALLY CHANGES IN BROWSER
 file watcher algorithm
 parcel uses file wathcer algorithm it is written in c++
 verification of files
 dist folder keep the files minified for us.
 ->dvelopment buid
 npx parcel index.html
 it creates development buid and hoisted on teh server
 --this creates faster develoment verion of project and serves it on the server
 tell parcer to make build production
 -npx parcel build index.html
  parcer make buid in  dist foolder 
 parser is cleaning code 
 there is no console.log in our code
 it it kaing 1.5 to production buid
 1.5ms 
 when we create development buid it takes 
 in 407 ms 
 for subsequent it is taking 4ms
 it depend on system,dependies,files
 parser manges dev and prdouction build
 superfast build algorithm
 parser minifies images
 image optimization
 caching while development
 compression
 rewritting 
 compaitable with older version of browser
 it add polyfils
 https on local dev
 all this os doing parser to give best performane

 
 */





import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement(
  "h1",
  { id: "title" },
  "heading"
);

const heading1 = React.createElement(
  "h1",
  { id: "title" },
  "heading1"
);

const container = React.createElement(
  "div",
  { id: "container" },
  [heading, heading1]
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);
