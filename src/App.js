import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import NasaInfo from "./components/NasaInfo";

function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        setNasaData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="logo">
            <img src={require("./nasa-logo.png")} alt="nasa logo" />
          </div>
        </div>
      </header>
      <NasaInfo data={nasaData} />
    </div>
  );
}

export default App;
