import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NFTDetails from "./pages/NFTDetails";
import Navbar from "./components/Navbar";

function App() {
return (
<div>
<Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/nft/:id" element={<NFTDetails />} />
  </Routes>
</div>

);
}

export default App;