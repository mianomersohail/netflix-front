import { bannerurl } from '../../utils/constant';

export default function MovieCard({ posterPath }) {
  return (
    <div className="w-48 max-lg:w-40 pr-2">
      <img  src={`${bannerurl}${posterPath || "defaultImage.jpg"}`} alt="movie-banner" /> 
    </div>
  );
}
