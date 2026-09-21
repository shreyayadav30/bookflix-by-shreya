import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GenreSection from "./components/GenreSection";
import GenrePage from "./pages/GenrePage";
import BookDetails from "./pages/BookDetails";
import Favorites from "./pages/Favorites";

import "./App.css";

function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      <GenreSection
        title="Fantasy"
        description="Fantasy books are filled with magic, adventure, and imaginative worlds. They allow readers to explore extraordinary places and experience stories beyond real-life possibilities."
        image="/fantasy2.avif"
        link="/fantasy"
      />

      <GenreSection
        title="Horror"
        description="Horror books take readers into a world of darkness, suspense, and the unknown. Filled with haunted places, supernatural events, and terrifying secrets."
        image="/horror.avif"
        link="/horror"
        reverse={true}
      />

      <GenreSection
        title="Romance"
        description="Romance books celebrate love, hope, and deep human connections. From sweet and heartwarming moments to emotional journeys and unforgettable relationships."
        image="/romance2.avif"
        link="/romance"
      />

      <GenreSection
        title="Mystery"
        description="Mystery books are built around secrets waiting to be uncovered. With clever detectives, hidden clues, and unexpected twists."
        image="/mystery.avif"
        link="/mystery"
        reverse={true}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Genre Pages */}
        <Route path="/:genre" element={<GenrePage />} />

        {/* Book Details */}
        <Route path="/book/:id" element={<BookDetails />} />

        {/* Favorites */}
        <Route path="/favorites" element={<Favorites />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;