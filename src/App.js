import ReactDOM from 'react-dom';
import { useEffect } from "react";
 
let num = 0;

export async function fetchData() {
  num = Math.floor(Math.random() * (10)) + 1;
  const response = await fetch(
    `https://testimonialapi.toolcarton.com/api/${num}`
  );
  const data = await response.json();
  return data;
}

function Main() {
  useEffect(() => {
    fetchData().then((data) => {
      ReactDOM.render(
        <a>{data.name}.</a>,
        document.getElementById("name"));
      document.getElementById("name").setAttribute("glot-model", "name" + num);
      ReactDOM.render(
        <a>I live in {data.location}.</a>,
        document.getElementById("address"));
      document.getElementById("address").setAttribute("glot-model", "address" + num)
      ReactDOM.render(
        <a>I am a {data.designation}.</a>,
        document.getElementById("designation"));
      document.getElementById("designation").setAttribute("glot-model", "designation" + num)
    });
  }, []);

  return (null)
};


export default Main;
