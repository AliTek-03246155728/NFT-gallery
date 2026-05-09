import { Link } from "react-router-dom";

function Navbar() {
return (
<nav className="navbar">
<Link to="/" className="logo">
NFT Gallery
</Link>
</nav>
);
}

export default Navbar;