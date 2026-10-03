import Star from "../assets/star.svg";
export default function Rating({ rating }) {
  const stars = Array(rating).fill(Star);
  return (
    <div className="flex items-center space-x-1 mb-5">
      {stars.map((star, index) => (
        <img src={star} key={index} alt="star" />
      ))}
    </div>
  );
}
