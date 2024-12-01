import React from 'react';
import ReactDOM from 'react-dom/client';

/*import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

/*--Our own react but user can't create this for each and every element..very time consuming//
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}*/

const anotherElement = (
  <a href="https//google.com" target='_blank'> Visit google </a>
)

const anotherUser= "chai aur Shivam";

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherElement,
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)


