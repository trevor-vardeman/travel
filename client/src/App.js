import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <Routes>
      <div className="App">
        <Route path="/testing">
          <h1>Test Route</h1>
        </Route>
        <Route path="/">
          <h1>Page Count: {count}</h1>
        </Route>
      </div>
    </Routes>
  );
}

export default App;