//  --------------------------------------------------
//  ----------  /udemy.antonydev.tech/  --------------
//  ----------  /master-css/  ------------------------
//  ----------  /assets/js/section-css.js  ----------
//  --------------------------------------------------


const base = '/udemy.antonydev.tech/master-css';
const favicon = `${base}/assets/favicon/css3-favicon.ico`;

const stylesIndex = `${base}/assets/css/styles.css`;
const stylesSelectores = `${base}/assets/css/selectores.css`;
//const stylesIndex = './assets/css/styles.css';
//const stylesSelectores = './assets/css/selectores.css';




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
        styles: stylesIndex

    },
    
];


export { sectionCss };
