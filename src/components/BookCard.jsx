import { Link } from "react-router-dom";
import { useState } from "react";

function BookCard({ book, active }) {
  const [favorite, setFavorite] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    return saved.some((item) => item.id === book.id);
  });

  function toggleFavorite() {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorite) {
      const updated = saved.filter((item) => item.id !== book.id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setFavorite(false);
    } else {
      saved.push(book);
      localStorage.setItem("favorites", JSON.stringify(saved));
      setFavorite(true);
    }
  }

  return (
    <div
      className={`book-card ${active ? "active" : ""}`}
      id={`book-${book.title}`}
    >
      <Link to={`/book/${book.id}`}>
        <img
          src={book.cover}
          alt={book.title}
        />
      </Link>

      <h3>{book.title}</h3>

      <p>{book.author}</p>

      <button
        className="favorite-btn"
        onClick={toggleFavorite}
      >
        {favorite ? "♥ Favorited" : "♡ Favorite"}
      </button>

      <a
        href={book.buyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="buy-btn"
      >
        Buy Now
      </a>
    </div>
  );
}

export default BookCard;