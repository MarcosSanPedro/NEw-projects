/* eslint-disable react/prop-types */
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const CategoryList = ({ title, items }) => {
    const scrollRef = useRef(null);
  
    const handleScroll = (scrollOffset) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += scrollOffset;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
  
        // Si llegamos al final, retroceder al principio
        if (scrollLeft + clientWidth === scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        }
  
        // Si retrocedemos más allá del principio, ir al final
        if (scrollLeft === 0 && scrollOffset < 0) {
          scrollRef.current.scrollLeft = scrollWidth - clientWidth;
        }
      }
    };
    
  
    return (
      <div className="mb-8 relative">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="flex items-center overflow-hidden">
          {/* Flecha izquierda */}
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
            onClick={() => handleScroll(-200)}
          >
             <FontAwesomeIcon icon={faChevronLeft} />
          </div>
  
          <div ref={scrollRef} className="flex space-x-4 overflow-x-scroll overflow-hidden scrollbar-hide relative">
                {items.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-64">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt={item.title}
                            className="w-full h-64 object-cover rounded-md"
                        />
                        <div className="mt-2">
                        <Link to={`/details/${item.id}`} key={item.id}>
  <h3 className="text-lg font-semibold">
    {item.title || item.name}
  </h3>
</Link>
                            {/* <p className="text-gray-500">{item.overview}</p> */}
                            <p className="text-gray-500">{item.release_date}</p>

                            <p className="text-yellow-500">
                                Valoración: {item.vote_average}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
  
          {/* Flecha derecha */}
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10" 
            onClick={() => handleScroll(200)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
    );
  };
  
  export default CategoryList;
  