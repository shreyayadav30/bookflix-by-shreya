import { useParams, Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

function GenrePage() {
  const { genre } = useParams();
  const [searchParams] = useSearchParams();

  const selectedBook = searchParams.get("book");

  const [genreBooks, setGenreBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGenreBooks() {
      try {
        setLoading(true);

        const response = await fetch(
  `https://bookflix-by-shreya.onrender.com/api/books/genre/${genre}`
);

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();

        setGenreBooks(data);
      } catch (error) {
        console.error("Genre API Error:", error);
        setGenreBooks([]);
      } finally {
        setLoading(false);
      }
    }

    fetchGenreBooks();
  }, [genre]);

  return (
    <div className="genre-page">

      <div className="genre-page-header">

        <Link to="/" className="home-btn">
          ← Home
        </Link>

        <h1>{genre.toUpperCase()}</h1>

      </div>

      {loading ? (
        <p>Loading books...</p>
      ) : (
        <div className="book-row">

          {genreBooks.map((book) => {

            const isActive =
              selectedBook &&
              book.title.trim().toLowerCase() ===
                selectedBook.trim().toLowerCase();

            return (
              <BookCard
                key={book.id}
                book={book}
                active={isActive}
              />
            );
          })}

        </div>
      )}

    </div>
  );
}

export default GenrePage;