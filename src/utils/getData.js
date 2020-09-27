const ApiKey = '6aba441d5df3e6a2518c33d095dc72c9';


const getData = async() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`;
    try{
        const response = await fetch(url)
        const json = await response.json()
        return json
    } catch(error) {
        console.log('ERROR!!', error);
    };
}

const getFilm = async(id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`; 
    try{
        const response = await fetch(url)
        const json = await response.json()
        return json
    } catch(error) {
        console.log('ERROR!!', error);
    };
}


const getCast = async(id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}`;
    try{
        const response = await fetch(url)
        const json = await response.json()
        return json
    } catch(error) {
        console.log('ERROR!!', error);
    };
}

export { getFilm, getData, getCast};