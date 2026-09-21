import { Link } from "react-router-dom";

function GenreSection({ title, description, image, link, reverse }) {
  return (
    <section className={`genre ${reverse ? "reverse" : ""}`}>

      <div className="genre-image">
        <img
          src={image}
          alt={`${title} Books`}
        />
      </div>

      <div className="genre-content">
        <h2>{title}</h2>

        <p>{description}</p>

        <Link to={link} className="btn">
          Explore {title}
        </Link>
      </div>

    </section>
  );
}

export default GenreSection;