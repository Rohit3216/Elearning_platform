import React from "react";

const PlanCard = ({ title, subtitle, price, features, buttonText, isHighlighted }) => (
  <div
    className={`p-6 border rounded-lg ${
      isHighlighted ? "border-purple-500" : "border-gray-300"
    } bg-white shadow-sm flex flex-col`}
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
    {price && <p className="text-xl font-bold mb-2">{price}</p>}
    {!price && <p className="text-xl font-bold mb-2">Contact sales for pricing</p>}
    <p className="text-sm text-gray-400 mb-4">
      {price ? "Billed monthly or annually. Cancel anytime." : ""}
    </p>
    <button
      className={`text-white font-medium py-2 px-4 rounded-md ${
        isHighlighted ? "bg-purple-600 hover:bg-purple-700" : "bg-black hover:bg-gray-800"
      }`}
    >
      {buttonText} →
    </button>
    <ul className="mt-6 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-500 mr-2">✔</span>
          <p className="text-sm text-gray-600">{feature}</p>
        </li>
      ))}
    </ul>
  </div>
);

const Plans = () => {
  const plans = [
    {
      title: "Personal Plan",
      subtitle: "For you",
      price: "Starting at $10.00 per month",
      features: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
      ],
      buttonText: "Try it free",
    },
    {
      title: "Team Plan",
      subtitle: "For your team (2 to 20 people)",
      price: "$15.00 a month per user",
      features: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Analytics and adoption reports",
      ],
      buttonText: "Try it free",
    },
    {
      title: "Enterprise Plan",
      subtitle: "For your whole organization (more than 20 people)",
      features: [
        "Access to 27,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Advanced analytics and insights",
        "Dedicated customer success team",
        "International course collection featuring 15 languages",
        "Customizable content",
        "Hands-on tech training with add-on",
        "Strategic implementation services with add-on",
      ],
      buttonText: "Request a demo",
      isHighlighted: true,
    },
  ];

  return (
    <div className="bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Accelerate growth — for you or your organization
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Reach goals faster with one of our plans or programs. Try one free today or contact sales
        to learn more.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            subtitle={plan.subtitle}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
            isHighlighted={plan.isHighlighted}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;
