import React from "react";

const FeatureCard = ({ icon, title, description, badge }) => (
  <div className="bg-gray-100 p-4 rounded-lg flex items-start space-x-4">
    <div className="text-black flex-shrink-0">{icon}</div>
    <div>
      <h3 className="font-semibold text-lg flex items-center">
        {title}
        {badge && (
          <span className="ml-2 bg-purple-100 text-purple-600 text-xs font-medium px-2 py-0.5 rounded-md">
            {badge}
          </span>
        )}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const Yourgols = () => {
  const features = [
    {
      icon: "🌟",
      title: "Hands-on training",
      description:
        "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
    },
    {
      icon: "🎓",
      title: "Certification prep",
      description:
        "Prep for industry-recognized certifications by solving real-world challenges and earning badges along the way.",
    },
    {
      icon: "📊",
      title: "Insights and analytics",
      description:
        "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
      badge: "Enterprise Plan",
    },
    {
      icon: "⚙️",
      title: "Customizable content",
      description:
        "Create tailored learning paths for team and organization goals and even host your own content and resources.",
      badge: "Enterprise Plan",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8 p-6 bg-gray-50">
      {/* Left Section */}
      <div className="flex flex-col space-y-6 w-full lg:w-1/2">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            badge={feature.badge}
          />
        ))}
      </div>

      {/* Right Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2">
        <h3 className="font-semibold text-lg mb-4">Containerization</h3>
        <p className="text-gray-500 mb-2">30 questions</p>
        <div className="text-center">
          <h1 className="text-5xl font-bold text-purple-600 mb-4">159</h1>
          <p className="text-sm text-gray-500">Your performance assessment</p>
        </div>
        <div className="mt-6">
          <table className="w-full text-sm text-gray-600">
            <thead>
              <tr>
                <th className="text-left">Score</th>
                <th className="text-right">Percentile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Superior</td>
                <td className="text-right">88th Percentile</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Yourgols;
