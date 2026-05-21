import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Explore from "./Explore";
import Profile from "./Profile";
import History from "./History";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display:"flex",gap:"300px",padding:"20px"}}>
        <Link to="/">Home  </Link>
        <Link to="/Explore">  Explore</Link>
        <Link to="/Profile"> Profile </Link>
        <Link to="/History"> History </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);






