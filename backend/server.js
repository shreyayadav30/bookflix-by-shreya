const express = require("express");
const cors = require("cors");
const books = require("./data/books");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("BookFlix Backend is running!");
});

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/genre/:genre", (req, res) => {
  const genre = req.params.genre.toLowerCase();

  const genreBooks = books.filter(
    (book) => book.genre.toLowerCase() === genre
  );

  res.json(genreBooks);
});

app.get("/api/books/search", (req, res) => {
  const query = (req.query.q || "").toLowerCase();

  const results = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query)
  );

  res.json(results);
});

app.get("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  res.json(book);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});