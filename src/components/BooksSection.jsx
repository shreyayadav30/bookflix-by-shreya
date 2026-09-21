import BookCard from "./BookCard";

function BooksSection({ books, title }) {
  return (
    <section>
      <h2>{title}</h2>

      <div className="book-row">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </section>
  );
}

export default BooksSection;