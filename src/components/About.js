import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [btnColor, setBtnColor] = useState("dark");

  const toggleDark = () => {
    if (myStyle.color === "#212534") {
      setMyStyle({
        color: "white",
        backgroundColor: "#212534",
        border: "0.5px solid white",
      });
      setBtnText("Disable Dark Mode");
      setBtnColor("light");
    } else {
      setMyStyle({
        color: "#212534",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
      setBtnColor("dark");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion " id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or changing it to
              uppercase, lowercase, etc.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is a free Character counter tool that provides instant
              character count and word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word or character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browser such as
              Chrome, Firefox Internet Explorer, Safari, Opera. It suits to
              count characters in Facebook,blog, books, Excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={toggleDark} className={`btn btn-${btnColor} my-2`}>
        {btnText}
      </button>
    </div>
  );
}