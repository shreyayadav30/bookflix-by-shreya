import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <header>
      <Link to="/" className="logo">
        BookFlix
      </Link>

      <nav>
        <Link to="/fantasy">Fantasy</Link>
        <Link to="/horror">Horror</Link>
        <Link to="/romance">Romance</Link>
        <Link to="/mystery">Mystery</Link>
        <Link to="/favorites">❤️ Favorites</Link>
      </nav>

      <SearchBar />
    </header>
  );
}

export default Navbar;