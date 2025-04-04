export default function Teacher() {
  const teamMembers = [
    {
      name: "Lillian King",
      role: "WordPress Expert",
      img: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      name: "Kelly Franklin",
      role: "Designer",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Hilary Ouse",
      role: "PHP Expert",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Isabelle",
      role: "Digital Marketer",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Martha",
      role: "SEO Expert",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="max-w-[1240px] grid grid-cols-4 gap-4 mx-auto p-10 bg-gray-100">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 w-64 text-center mb-6"
        >
          <img
            src={member.img}
            alt={member.name}
            className="w-32 h-32 mx-auto rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
          <p className="text-gray-500">{member.role}</p>
          <div className="flex justify-center gap-3 mt-4">
            <button className="bg-gray-200 p-2 rounded-full">
              <i className="fab fa-facebook"></i>
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              <i className="fab fa-vimeo"></i>
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              <i className="fab fa-youtube"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
