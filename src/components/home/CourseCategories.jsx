import categorieImg from "../../assets/Images/Home/categorie.png"
import saleMarketingImg from "../../assets/Images/Home/sale-marketing.png"
import dataScienceImg from "../../assets/Images/Home/data-science.png"
import businessCreativityImg from "../../assets/Images/Home/business-creativity.png"

export default function CourseCategories() {
  const categories = [
    {
      id: 1,
      title: "Business Analysis",
      image: categorieImg,
      description:
        "Digital learning allows for more personalized and flexible learning and experiences.",
      courses: 5,
      price: "$75.00",
    },
    {
      id: 2,
      title: "Sales Marketing",
      image:  saleMarketingImg,
      description:
        "Digital learning allows for more personalized and flexible learning and experiences.",
      
    },
    {
      id: 3,
      title: "Data Science",
      image: dataScienceImg,
      description:
        "Digital learning allows for more personalized and flexible learning and experiences.",
      
    },
    {
      id: 4,
      title: "Business Creativity",
      image: businessCreativityImg,
      description:
        "Digital learning allows for more personalized and flexible learning and experiences.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f3f0ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[14px] md:text-[20px] lg:text-[25px] text-[#7e66f9] font-semibold uppercase mb-2">
            COURSE CATEGORIES
          </p>
          <h2 className="text-[24px] md:text-[35px] lg:text-[40px] font-bold text-gray-800 mb-4">
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
                  className="w-full h-full object-cover  transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-[#7e66f9]">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
