//  --------------------------------------------------
//  ----------  /udemy.antonydev.tech/  --------------
//  ----------  /master-css/  ------------------------
//  ----------  /assets/js/section-bootstrap.js  ----------
//  --------------------------------------------------


//  -----  Ruta base y del favicon  -----  
const base = '/udemy.antonydev.tech/master-css';
const favicon = `${base}/assets/favicon/bootstrap-favicon.ico`;

//  -----  Rutas de las hojas de estilos  -----
const stylesBootstrapIndex = `${base}/assets/css/styles-bootstrap.css`;

//  -----  Rutas de los script  -----
const scriptBootstrap = `${base}/assets/js/script-bootstrap.js`;


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
const sectionBootstrap = [

    {
        id: 'cssBootstrapIndex',
        url: `${base}/aprendiendo-bootstrap/index.html`,
        title: 'Aprendiendo Bootstrap 4',
        path: '/aprendiendo-bootstrap/index.html',
        favicon: favicon,
        styles: stylesBootstrapIndex,
        script: ''
    },

    {
        id: 'cssBootstrapHerramientas',
        url: `${base}/aprendiendo-bootstrap/herramientas/index.html`,
        title: 'Herramientas en Bootstrap 4',
        path: '/aprendiendo-bootstrap/herramientas/index.html',
        favicon: favicon,
        styles: stylesBootstrapIndex,
        script: ''
    },

    {
        id: 'cssBootstrapComponentes',
        url: `${base}/aprendiendo-bootstrap/componentes/index.html`,
        title: 'Componentes en Bootstrap 4',
        path: '/aprendiendo-bootstrap/componentes/index.html',
        favicon: favicon,
        styles: stylesBootstrapIndex,
        styles: scriptBootstrap
    }
    
    
];


export { sectionBootstrap };
