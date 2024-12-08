import { Link } from "react-router-dom";





const Card = ({ image, title, author, rating, reviews, price, originalPrice, badge }) => {
  
  
  return (
  <Link to={`/coursedetail/${title}`} >
    
    <div className="bg-white shadow-md rounded-md overflow-hidden w-72">
        <img src={image} alt={title} className="h-40 w-full object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          <p className="text-gray-500 text-sm truncate">{author}</p>
          <div className="flex items-center space-x-1 my-2">
            <span className="text-yellow-500 text-sm">★</span>
            {/* <span className="font-medium text-sm">{rating}</span> */}
            {/* <span className="text-gray-500 text-xs">({reviews})</span> */}  
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-lg font-semibold text-black">${price}</span>
            <span className="text-gray-400 line-through">${originalPrice}</span>
          </div>
          {badge && (
            <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">
              {badge}
            </span>
          )}
        </div>
      </div></Link> )
};

    export default Card;