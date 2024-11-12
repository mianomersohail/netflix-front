import {bannerurl} from '../../utils/constant'
export default function MovieCard({props}){
    return(
        <>
        <div className="w-48 pr-2">
            <img src={`${bannerurl}${props.posterPath}`} alt="movie-banner"/> 
        </div>
        </>
    )
}