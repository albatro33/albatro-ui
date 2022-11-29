import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import test from './posts/test.md';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [content, setContent] = useState('');

  const readMD = ()=>{
    fetch(test).then(res=>res.text()).then(text=>setContent(text));
  }

  return (
    <div className="App">
      <p>hello albatro33</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default App
