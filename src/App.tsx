import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {MDComponent} from './posts/test.md';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <p>hello albatro33</p>
      <MDComponent />
    </div>
  )
}

export default App
