import { useState } from "react";
// import SearchCourses from "./SearchCourses";

export default function CoursCourses() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    {
      id: 1,
      title: "Business Analysis",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Digital learning allows for more personalized and flexible learning and experiences.",
      // courses: 5,
      // price: "$75.00",
    },
    {
      id: 2,
      title: "Sales Marketing",
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Digital learning allows for more personalized and flexible learning and experiences.",
      // courses: 4,
      // price: "$45.00",
    },
    {
      id: 3,
      title: "Data Science",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Digital learning allows for more personalized and flexible learning and experiences.",
      // courses: 3,
      // price: "$58.00",
    },
    {
      id: 4,
      title: "Business Creativity",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Digital learning allows for more personalized and flexible learning and experiences.",
      // courses: 6,
      // price: "$85.00",
    },
    {
      id: 5,
      title: "Web Development",
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Learn to build modern and responsive websites with cutting-edge technologies.",
      // courses: 8,
      // price: "$99.00",
    },
    {
      id: 6,
      title: "Graphic Design",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Master the art of visual communication and design stunning graphics.",
      // courses: 7,
      // price: "$65.00",
    },
    {
      id: 7,
      title: "Cybersecurity",
      image:
        "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Protect systems and networks from digital attacks and threats.",
      // courses: 4,
      // price: "$120.00",
    },
    {
      id: 8,
      title: "Artificial Intelligence",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Explore the world of AI and machine learning to build intelligent systems.",
      // courses: 5,
      // price: "$150.00",
    },
  ];

  return (
    <div>
      {/* <SearchCourses /> */}
      <section className="py-16 md:py-24 bg-[#f3f0ff]">
        <div className="container mx-auto px-8 lg:px-16 min-h-screen">
          <div className="text-center mb-16">
            <p className="text-sm text-[#7e66f9] font-semibold uppercase mb-2">
              COURSE CATEGORIES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Popular Topics To Learn.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((category) => (
                <div
                  key={category.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300 transition-transform hover:scale-105 hover:shadow-xl p-4"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {category.description}
                    </p>
                    {/* <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        {category.courses} Courses
                      </span>
                      <span className="text-[#7e66f9] font-semibold">
                        {category.price}
                      </span>
                    </div> */}
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#7e66f9] text-white"
              }`}
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(
                    prev + 1,
                    Math.ceil(categories.length / itemsPerPage)
                  )
                )
              }
              disabled={
                currentPage === Math.ceil(categories.length / itemsPerPage)
              }
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === Math.ceil(categories.length / itemsPerPage)
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#7e66f9] text-white"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
