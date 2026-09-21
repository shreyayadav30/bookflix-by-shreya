import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  async function handleSearch(e) {
    e.preventDefault();

    const searchText = query.trim();

    if (!searchText) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/books/search?q=${encodeURIComponent(
          searchText
        )}`
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const results = await response.json();

      if (results.length > 0) {
        const book = results[0];

        navigate(
          `/${book.genre.toLowerCase()}?book=${encodeURIComponent(
            book.title
          )}`
        );

        setQuery("");
      } else {
        alert("Book not found in your collection.");
      }
    } catch (error) {
      console.error("Search API Error:", error);
      alert("Unable to search books. Please try again.");
    }
  }

  return (
    <div className="search-box">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a book..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;