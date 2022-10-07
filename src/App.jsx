import { useState,  useCallback } from "react";
import "./App.css";
import Textarea, { Textarea as TextMemo } from "./components/Textarea";

function App() {
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [inp3, setInp3] = useState("");
  const code2 = useCallback(
    (event) => {
      setInp2(event.target.value);
    },
    []
  )
  const code1 = useCallback((event) => {
    setInp1(event.target.value);
  }, []);

  return (
    <div className="App">

        <Textarea
          label="Pass"
          onChange={code2}
          value={inp2}
        />
        <Textarea
          label="User"
          onChange={code1}
          value={inp1}
        />
        <TextMemo
          label="Subject"
          onChange={(e) => setInp3(e.target.value)}
          value={inp3}
        />
    </div>
  );
}

export default App;
