import { useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import Second from "./components/pages/Second";
import Third from "./components/pages/Third";

function App() {
  const [selectedAnimal, setAnimal] = useState("");
  const handleChangeAnimal = (event) => {
    setAnimal(event.target.value);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home handleChangeAnimal={handleChangeAnimal} />} />
        <Route path="second" element={<Second selectedAnimal={selectedAnimal} />} />
        <Route path="third" element={<Third />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
