import axios from "axios";
import "./assets/all.scss";
//
import logo from "./assets/logo.svg";
import "./assets/App.css";
import Input from "./components/Input";
import { useEffect, useState, React } from "react";

function App() {
  const [text, setText] = useState("");
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  //
  useEffect(() => {
    (async () => {
      const result = await axios.get("https://randomuser.me/api/");
      console.log(result);
    })();
  }, []);
  //
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <Input
            id="sample text"
            text={"這是輸入"}
            value={text}
            onChangeHandler={onChangeHandler}
          />
          <br />
          {text}
        </header>
      </div>
    </div>
  );
}

export default App;
