import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212534";
      document.title = "TextUtils | Home - Dark";
      showAlert("Dark Mode has been enabled", "success");
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now!!'
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils | Home";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About Us"
        />
        <Alert alert={alert} />
          <Routes>
              <Route exact path="/TextUtils-React/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> } ></Route>
              <Route exact path="/TextUtils-React/about" element={<About />}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
