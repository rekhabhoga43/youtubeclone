import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Explore from "./Explore";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display:"flex",gap:"500px",padding:"20px"}}>
        <Link to="/">Home  </Link>
        <Link to="/Explore">  Explore</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);






