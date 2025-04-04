import { useState } from "react";

export default function BlogCards() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const blogs = [
    {
      id: 1,
      image: "https://via.placeholder.com/300", // Replace with actual image
      date: "17 April, 2023",
      author: "Alomgir Hosen",
      title: "The Complete Web Developer Guideline 2023",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
      category: "SOCIAL MEDIA",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      date: "20 August, 2023",
      author: "Shahin Alam",
      title: "Social Media Marketing and MASTERY (A-Z) Journey",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
      category: "BRANDING",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      date: "10 June, 2023",
      author: "Negar Safa",
      title: "Branding: How to Brand Yourself and Your Business",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
      category: "BRANDING",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300",
      date: "05 May, 2023",
      author: "Sarah Johnson",
      title: "The Future of AI in Digital Marketing",
      description:
        "Explore how artificial intelligence is revolutionizing digital marketing.",
      category: "TECH",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300",
      date: "30 September, 2023",
      author: "David Lee",
      title: "E-commerce Growth Strategies for 2024",
      description:
        "Learn the key strategies to scale your online store in 2024.",
      category: "ECOMMERCE",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300",
      date: "12 December, 2023",
      author: "Emma Watson",
      title: "Content Creation Tips for Social Media Success",
      description:
        "Master content creation techniques to increase your social media engagement.",
      category: "SOCIAL MEDIA",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/300",
      date: "22 February, 2024",
      author: "John Doe",
      title: "SEO in 2024: What You Need to Know",
      description:
        "Stay ahead with the latest trends in SEO for the coming year.",
      category: "SEO",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/300",
      date: "14 March, 2024",
      author: "Sophia Martinez",
      title: "The Power of Personal Branding",
      description:
        "Learn how to establish your personal brand and stand out in your industry.",
      category: "BRANDING",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-3 gap-6">
        {blogs
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((blog) => (
            <div
              key={blog.id}
              className="bg-purple-100 rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center text-gray-600 text-sm space-x-3">
                  <span className="flex items-center gap-1">
                    📅 {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    👤 {blog.author}
                  </span>
                </div>
                <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>
                <p className="text-gray-500 mt-1 text-sm">{blog.description}</p>
                <span className="text-blue-600 font-bold text-sm mt-3 block">
                  {blog.category}
                </span>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from(
          { length: Math.ceil(blogs.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
