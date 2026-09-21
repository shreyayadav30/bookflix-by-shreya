import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  return (
    <div>
      <h1 className="favorites-title">My Favorites ❤️</h1>

      <div className="book-row">
        {favorites.length > 0 ? (
          favorites.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))
        ) : (
          <p className="no-favorites">
            You haven't added any books to your favorites yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default Favorites;