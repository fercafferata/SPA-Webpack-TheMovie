import getHash from '../utils/getHash';
import {getData, getFilm, getCast} from '../utils/getData';


const Film = async() => {
    const id = getHash()
    const movie = await getFilm(id);
    const credits = await getCast(id);
    const view=`
        <div class="Film-main">
            <h1>${movie.original_title}</h1>
            <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" class="backdrop">
            <article class="Film">
                <h3>Release date: <span> ${movie.release_date}</span></h3>
                <h3>Description: <span> ${movie.overview}</span></h3>
                <h3>Genres: <span>${movie.genres.map(gen =>` ${gen.name}`)}</span></h3>
                <h3>Vote average: <span>${movie.vote_average}</span></h3>
                <h3 id="cast">Actors: <span>${credits.cast.map(cast =>`${cast.name}, `).join('')}</span></h3>
            </article>
        </div> 

    `

    return view;
}

export default Film;