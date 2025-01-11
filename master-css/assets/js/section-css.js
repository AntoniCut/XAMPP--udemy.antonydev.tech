//  --------------------------------------------------
//  ----------  /udemy.antonydev.tech/  --------------
//  ----------  /master-css/  ------------------------
//  ----------  /assets/js/section-css.js  ----------
//  --------------------------------------------------


//  -----  Ruta base y del favicon  
const base = '/udemy.antonydev.tech/master-css';
const favicon = `${base}/assets/favicon/css3-favicon.ico`;

//  -----  Rutas de las hojas de estilos  -----
const stylesIndex = `${base}/assets/css/styles.css`;
const stylesSelectores = `${base}/assets/css/selectores.css`;
const stylesFuentes = `${base}/assets/css/fuentes.css`;
const stylesFondos = `${base}/assets/css/fondos.css`;
const stylesCajas = `${base}/assets/css/cajas.css`;
const stylesPseudoclases = `${base}/assets/css/pseudoclases.css`;
const stylesTransicAnim = `${base}/assets/css/transic-anim.css`;


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
const sectionCss = [

    {
        id: 'cssIndex',
        url: `${base}/aprendiendo-css/index.html`,
        title: 'Aprendiendo CSS',
        path: '/aprendiendo-css/index.html',
        favicon: favicon,
        styles: stylesIndex
    },

    {
        id: 'cssSelectores',
        url: `${base}/aprendiendo-css/selectores/index.html`,
        title: 'Selectores en CSS',
        path: '/aprendiendo-css/selectores/index.html',
        favicon: favicon,
        styles: stylesSelectores

    },

    {
        id: 'cssFuentes',
        url: `${base}/aprendiendo-css/fuentes/index.html`,
        title: 'Fuentes en CSS',
        path: '/aprendiendo-css/fuentes/index.html',
        favicon: favicon,
        styles: stylesFuentes

    },

    {
        id: 'cssFondos',
        url: `${base}/aprendiendo-css/fondos/index.html`,
        title: 'Fondos en CSS',
        path: '/aprendiendo-css/fondos/index.html',
        favicon: favicon,
        styles: stylesFondos

    },

    {
        id: 'cssCajas',
        url: `${base}/aprendiendo-css/cajas/index.html`,
        title: 'Cajas en CSS',
        path: '/aprendiendo-css/cajas/index.html',
        favicon: favicon,
        styles: stylesCajas

    },

    {
        id: 'cssPseudoclases',
        url: `${base}/aprendiendo-css/pseudoclases/index.html`,
        title: 'Pseudoclases en CSS',
        path: '/aprendiendo-css/pseudoclases/index.html',
        favicon: favicon,
        styles: stylesPseudoclases

    },

    {
        id: 'cssTransiAnim',
        url: `${base}/aprendiendo-css/transiciones-animaciones/index.html`,
        title: 'Trancisiones y Animaciones en CSS',
        path: '/aprendiendo-css/transiciones-animaciones/index.html',
        favicon: favicon,
        styles: stylesTransicAnim

    },
    
];


export { sectionCss };
