import React from 'react';

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black' ,
    backgroundColor: props.mode === 'light' ? 'white' : '#6c757d' 

  };

  return (
    <>
      <div className="accordion mx-5 my-5" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" style={myStyle}>
          <h1 className="accordion" style={myStyle}>About Us</h1>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>What is Text Utils?</strong>
            </button>
          </h2>
          <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Text Utils is a powerful and versatile application designed to streamline and enhance your text processing tasks. Whether you need to format, analyze, or manipulate text data, our tool offers a wide range of features to simplify your workflow. From text transformation and cleanup to advanced analysis and conversion, Text Utils provides an intuitive interface to handle all your text needs efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item"style={myStyle}>
          <h2 className="accordion-header"style={myStyle}>
            <button 
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Key Features</strong>
            </button>
          </h2>
          <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <ul>
                <li><b>Text Transformation:</b> Easily convert text to uppercase, lowercase, title case, and more. Transform your text to match your specific requirements with just a few clicks.</li>
                <li><b>Text Analysis:</b> Gain insights from your text with built-in analysis tools. Get word counts, character counts, and other useful metrics to better understand and manage your content.</li>
                <li><b>Text Cleanup:</b> Remove unwanted characters, extra spaces, and formatting issues to ensure your text is clean and professional. Our cleanup tools help you maintain consistency and quality in your text.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" style={myStyle}>
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Why Choose Us?</strong>
            </button>
          </h2>
          <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div style={myStyle} className="accordion-body">
              Text Utils stands out with its user-friendly design and robust functionality. Our application is built to handle a variety of text processing tasks with ease, making it ideal for both casual users and professionals. With continuous updates and a focus on user feedback, we ensure that Text Utils remains a reliable and valuable tool for all your text-related needs.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
