/* eslint-disable react/prop-types */
const CategoryList = ({ title, items }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="flex space-x-4 overflow-x-scroll overflow-hidden scrollbar-hide relative">
                {items.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-64">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt={item.title}
                            className="w-full h-64 object-cover rounded-md"
                        />
                        <div className="mt-2">
                            <h3 className="text-lg font-semibold">
                                {item.title}
                            </h3>
                            <h3 className="text-lg font-semibold">
                                {item.name}
                            </h3>
                            <p className="text-gray-500">{item.overview}</p>
                            <p className="text-gray-500">{item.release_date}</p>

                            <p className="text-yellow-500">
                                Valoración: {item.vote_average}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
