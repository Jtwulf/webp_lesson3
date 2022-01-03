import ReactDOM from 'react-dom';
import { useEffect } from "react";
import { fetchData } from "./Api.js";
import './App.css';

function Main() {
  const data = null;
  useEffect(() => {
    fetchData().then((data) => {
      ReactDOM.render(
        <a>こんにちは。私の名前は{data.name}です。</a>,
        document.getElementById("name"));
      ReactDOM.render(
        <a>私は{data.location}に住んでいます。</a>,
        document.getElementById("location"));
      ReactDOM.render(
        <a>私は{data.designation}です。</a>,
        document.getElementById("designation"));
    });
  }, []);

  return (null)
};

function App() {
  return (
    <Main />
  );
}

export default App;
