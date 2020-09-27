const resolveRoutes = (route) => {
    if (route.length <= 7) {
        let valideRoute = route === '/' ? route : '/id';
        return valideRoute;    
    }

    return `/${route}`;
}

export default resolveRoutes;