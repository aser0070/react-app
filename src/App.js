import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {

  const [message, setMessage] = useState('hello');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>message: {message}</p>
        <input onChange={e => setMessage(e.target.value)} value={message} />
      </header>
    </div>
  );
}