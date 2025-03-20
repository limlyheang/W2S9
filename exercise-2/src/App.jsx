import React from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [text, setText] = React.useState("");
  
  const HandleInputChange = (event) => {
    
    setText(event.target.value);
  }

  /* You will need a function to handle a key pressed on the first input and update the state*/

  const HandleKeyPress = (event) => {
    if(event.key === 'Enter') {
      setText(event.target.value);
    }
    
  }

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input 
        type="text"
        value={text}
        onChange={HandleInputChange}
        onKeyPress={HandleKeyPress}
      />

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input 
          type='text'
          value={text.toUpperCase()}
        />
      </p>
    </main>
  );
}

export default App;