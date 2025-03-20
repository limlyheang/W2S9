import React from "react";

function App() {
  /* You will need to use many state to keep the input values and other needs */
  const [a, setA] = React.useState();
  const [b, setB] = React.useState();
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState("");

  /* You will need some function to handle the key pressed and button events */
  const handleInputA = (e) => {
    setA(Number(e.target.value));
  };

  const handleInputB = (e) => {
    setB(Number(e.target.value));
  };

  const handleCompute = () => {
    if (isNaN(a) || isNaN(b)) {
      setError("Please enter valid numbers");
      setResult(null);
    } else {
      setError("");
      setResult(a + b);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="number" value={a} onChange={handleInputA} />

      <label>B =</label>
      <input type="number" value={b} onChange={handleInputB} />

      <label>A + B =</label>

      {/* When Compute button is clicked, this input displays the sum of the 2 numbers, or the error message in RED */}
      <input
        type="text"
        value={error ? error : result}
        disabled
        style={{ color: error ? "red" : "black" }}
      />
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;