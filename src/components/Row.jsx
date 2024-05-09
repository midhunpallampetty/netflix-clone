import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import "../style/Row.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Row({ title, fetchURL, rowID }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [fetchURL]);
  
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>

      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowID}
          className=" inline-flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative scroll-slow"
        >
          {movies
            .filter((item) => item?.backdrop_path)
            .map((item, id) => (
              <Movie key={id} item={item} />
            ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
}

export default Row;
