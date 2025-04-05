import img1 from "../../assets/Images/teacher/img1.jpg";
import img2 from "../../assets/Images/teacher/img2.jpg";
import img3 from "../../assets/Images/teacher/img3.jpg";
import img4 from "../../assets/Images/teacher/img4.jpg";
import img5 from "../../assets/Images/teacher/img5.jpg";

export default function Teacher() {
  const teamMembers = [
    {
      name: "Lillian King",
      role: "WordPress Expert",
      img: img1,
    },
    {
      name: "Kelly Franklin",
      role: "Designer",
      img: img2,
    },
    {
      name: "Hilary Ouse",
      role: "PHP Expert",
      img: img3,
    },
    {
      name: "Isabelle",
      role: "Digital Marketer",
      img: img4,
    },
    {
      name: "Martha",
      role: "SEO Expert",
      img: img5,
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
            className="w-70 h-60 mx-auto rounded-lg"
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
