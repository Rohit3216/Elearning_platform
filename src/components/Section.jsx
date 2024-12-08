import React from "react";




const CourseCard = ({ image, title, author, rating, reviews, price, originalPrice, badge }) => (
  <div className="bg-white shadow-md rounded-md overflow-hidden w-72">
    <img src={image} alt={title} className="h-40 w-full object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-500 text-sm">{author}</p>
      <div className="flex items-center space-x-1 my-2">
        <span className="text-yellow-500 text-sm">★</span>
        <span className="font-medium text-sm">{rating}</span>
        <span className="text-gray-500 text-xs">({reviews})</span>
      </div>
      <div className="flex items-baseline space-x-2">
        <span className="text-lg font-semibold text-black">${price}</span>
        <span className="text-gray-400 line-through">${originalPrice}</span>
      </div>
      {badge && <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">{badge}</span>}
    </div>
  </div>
);

const Section = () => {
  const categories = [
    { name: "ChatGPT", learners: "3M+" },
    { name: "Data Science", learners: "7M+" },
    { name: "Python", learners: "46.6M+" },
    { name: "Machine Learning", learners: "8M+" },
    { name: "Deep Learning", learners: "2M+" },
    { name: "Artificial Intelligence (AI)", learners: "3M+" },
    { name: "Statistics", learners: "1M+" },
    { name: "Natural Language Processing", learners: "789,780" },
  ];

  const courses = [
    {
      image: "https://media.istockphoto.com/id/529418808/photo/shes-developing-advanced-code.webp?a=1&b=1&s=612x612&w=0&k=20&c=cZ6zUOrOj2Lh3ypFhC0kVXi7MxgT4XHc09gyWEtVVU4=",
      title: "NLP - Natural Language Processing with Python",
      author: "Jose Portilla, Pierian Training",
      rating: 4.5,
      reviews: "18,192",
      price: "9.99",
      originalPrice: "74.99",
      badge: "Bestseller",
    },
    {
      image: "https://media.istockphoto.com/id/1552848373/photo/woman-tablet-and-hologram-at-night-in-web-design-with-dashboard-interface-or-hud-display-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=szlvecoXx75PPDwQVu672Mi0y5FRldOqhu-FTbCIhSE=",
      title: "Modern Natural Language Processing in Python",
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "9.99",
      originalPrice: "64.99",
    },
    {
      image: "https://media.istockphoto.com/id/1149529035/photo/this-looks-interesting.webp?a=1&b=1&s=612x612&w=0&k=20&c=WBoEsW34ZoDhvrdadrU9jl1b6Gxc2B-tXtUnPT_FVR8=",
      title: "Modern Natural Language Processing in Python",
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "9.99",
      originalPrice: "64.99",
    },
    {
      image: "https://media.istockphoto.com/id/638620962/photo/sifting-through-streams-of-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=ioi1MpgcJeKtncsX6gPWiHtiLW0uGAXnSZE2LE3-NrM=",
      title: "Modern Natural Language Processing in Python",
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "9.99",
      originalPrice: "64.99",
    },
    {
      image: "https://media.istockphoto.com/id/1552875565/photo/programming-coding-and-man-with-focus-hologram-and-trading-with-cyber-security-futuristic-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=kDl6LkUcVrUP3MJwv17F2jsAndTroskw-ulbWDBI17E=",
      title: "Modern Natural Language Processing in Python",
      author: "Martin Jocqueviel, SuperDataScience",
      rating: 4.5,
      reviews: "1,715",
      price: "9.99",
      originalPrice: "64.99",
    },
    // Add other courses similarly
  ];

  return (
    <div className="p-6 bg-gray-50">
      {/* Category Scroller */}
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-full ${
              category.name === "Natural Language Processing"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {category.name}
            <span className="ml-2 text-gray-400">{category.learners} learners</span>
          </button>
        ))}
      </div>

      {/* Courses */}
      <div className="flex space-x-4 overflow-x-auto">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Section;

