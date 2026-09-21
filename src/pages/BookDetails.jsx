import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BookDetails() {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBook() {
      try {
        setLoading(true);

        const response = await fetch(
          `http://localhost:5000/api/books/${id}`
        );

        if (!response.ok) {
          throw new Error("Book not found");
        }

        const data = await response.json();

        setBook(data);
      } catch (error) {
        console.error("Book Details API Error:", error);
        setBook(null);
      } finally {
        setLoading(false);
      }
    }

    fetchBook();
  }, [id]);

  if (loading) {
    return <h2>Loading book...</h2>;
  }

  if (!book) {
    return <h1>Book not found</h1>;
  }

  return (
    <div className="book-details">

      <img
        src={book.cover}
        alt={book.title}
      />

      <div>
        <h1>{book.title}</h1>

        <h3>Author: {book.author}</h3>

        <p>Genre: {book.genre}</p>

        <a
          href={book.buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="buy-btn"
        >
          Buy Now
        </a>

        <br />

        <Link
          to={`/${book.genre.toLowerCase()}`}
          className="btn"
        >
          ← Back to {book.genre}
        </Link>
      </div>

    </div>
  );
}

export default BookDetails;