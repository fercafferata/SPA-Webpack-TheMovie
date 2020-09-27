import Header from '../templates/Header';
import Home from '../pages/Home';
import Film from '../pages/Film';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';

const routes = {
    '/': Home,
    '/id': Film,
};

const router = async()=> {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML= await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : document.write('Pagina no encontrada');
    content.innerHTML = await render();
};

export default router;