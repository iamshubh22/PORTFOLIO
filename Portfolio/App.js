import "./App.css";
import CustomInputField from "./components/CustomInputField";
import { useState } from "react";

function App() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [sum, setSum] = useState(null);
  function calculateSum(event) {
    event.preventDefault()
    if(typeof(a) !== "number" || typeof(b) !== "number"){
      alert("Fill both numbers")
    }
    else{
      setSum(a+b)
    }
  }
  return (
    <div>
      <form onSubmit={(event) => calculateSum(event)}>
        <CustomInputField
          label="Enter First Number"
          onChanged={(element) => setA(parseFloat(element.target.value))}
        />
        <CustomInputField
          label="Enter Second Number"
          onChanged={(element) => setB(parseFloat(element.target.value))}
        />
        <button type="submit">Calculate Sum</button>
      </form>
      {sum != null ? <p>{sum}</p> : <div></div>}
    </div>
  );
}

export default App;