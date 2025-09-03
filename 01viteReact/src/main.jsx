import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>My new react app</h1>
    </div>
  );
}

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  { href: 'https://youtube.com', target: '_blank' },
  'click me to visit youtube', 
  anotherUser
);


const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

const root = createRoot(document.getElementById('root'));
root.
render(
      reactElement
);
