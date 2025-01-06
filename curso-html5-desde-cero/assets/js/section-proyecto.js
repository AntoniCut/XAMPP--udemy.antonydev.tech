//  ------------------------------------------------
//  ----------  /udemy.antonydev.tech/  ------------
//  ----------  /curso-html5-desde-cero/  ----------
//  ----------  /assets/js/sections.js  ------------
//  ------------------------------------------------


const base = '/udemy.antonydev.tech/curso-html5-desde-cero';
const favicon = `${base}/assets/favicon/html5-favicon.ico`;
//const favicon = `./curso-html5-desde-cero/assets/favicon/html5-favicon.ico`;


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
const sectionProyecto = [

    {
        id: 'proyectoIndex',
        url: `${base}/proyecto-html5/index.html`,
        title: 'Proyecto HTML 5',
        path: '/proyecto-html5/index.html',
        favicon: favicon
    },

    {
        id: 'proyectoMultimedia',
        url: `${base}/proyecto-html5/multimedia/index.html`,
        title: 'Multimedia',
        path: '/proyecto-html5/multimedia/index.html',
        favicon: favicon
    },

    {
        id: 'proyectoDieta',
        url: `${base}/proyecto-html5/dieta/index.html`,
        title: 'Dieta',
        path: '/proyecto-html5/dieta/index.html',
        favicon: favicon
    },

    {
        id: 'proyectoContacto',
        url: `${base}/proyecto-html5/contacto/index.html`,
        title: 'Contacto',
        path: '/proyecto-html5/contacto/index.html',
        favicon: favicon
    }
    
];


export { sectionProyecto };