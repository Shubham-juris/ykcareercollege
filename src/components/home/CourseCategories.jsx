export default function CourseCategories() {
  const categories = [
    {
      id: 1,
      title: "Business Analysis",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Digital learning allows for more personalized and flexible learning and experiences.",
      courses: 5,
      price: "$75.00",
    },
    {
      id: 2,
      title: "Sales Marketing",
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Digital learning allows for more personalized and flexible learning and experiences.",
      courses: 4,
      price: "$45.00",
    },
    {
      id: 3,
      title: "Data Science",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Digital learning allows for more personalized and flexible learning and experiences.",
      courses: 3,
      price: "$58.00",
    },
    {
      id: 4,
      title: "Business Creativity",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description:
        "Digital learning allows for more personalized and flexible learning and experiences.",
      courses: 6,
      price: "$85.00",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f3f0ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-[#7e66f9] font-semibold uppercase mb-2">
            COURSE CATEGORIES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Popular Topics To Learn.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl"
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
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm">
                    {category.courses} Courses
                  </span>
                  <span className="text-[#7e66f9] font-semibold">
                    {category.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
