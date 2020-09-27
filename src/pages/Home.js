import {getData} from '../utils/getData';


const Home = async() => {
    
    const data = await getData();

    const view=`
                
        <div class="content">
            ${data.results.map(film =>`
            <div class="container">
                <a style="text-decoration:none" href="#/${film.id}">
                    <img src="https://image.tmdb.org/t/p/w500${film.poster_path}" class="card-img-top">
                </a>
                <div class="container-data">
                    <h3 class="title">${film.title}</h3>
                </div>
            </div>
            `).join('')}
        </div>
        
    `
    return view;
};

export default Home;