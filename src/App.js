import { Navigate, Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import Second from "./components/pages/Second";
import Third from "./components/pages/Third";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='second' element={<Second />} />
        <Route path='third' element={<Third />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
