import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWX0BL6S0i2SkwqwzNm9X4nExgB6iWkSs",
  authDomain: "web-messenger-47f44.firebaseapp.com",
  databaseURL: "https://web-messenger-47f44.firebaseio.com",
  projectId: "web-messenger-47f44",
  storageBucket: "web-messenger-47f44.appspot.com",
  messagingSenderId: "490291767343",
  appId: "1:490291767343:web:beb443d26421d545bdbeda",
  measurementId: "G-RQDNSQGXMX"
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
