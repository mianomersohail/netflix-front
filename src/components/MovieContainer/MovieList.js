import { useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Handle the mouse movement on hover to scroll the container
    const handleMouseMove = (e) => {
      const containerWidth = scrollContainer.offsetWidth; // Container width
      const mouseX = e.clientX - scrollContainer.offsetLeft; // Mouse position relative to the container

      // Calculate the scroll position based on the mouse position
      const scrollPercentage = mouseX / containerWidth;
      scrollContainer.scrollLeft = (scrollContainer.scrollWidth - containerWidth) * scrollPercentage;
    };

    // Add the mousemove event listener for hover scrolling
    scrollContainer.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener
    return () => {
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="px-8">
      <h1 className="text-3xl py-3 text-white">{title}</h1>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto no-scrollbar"
      >
        <div className="flex items-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}
