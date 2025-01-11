//  --------------------------------------------------
//  ----------  /udemy.antonydev.tech/  --------------
//  ----------  /master-css/  ------------------------
//  ----------  /assets/js/section-less.js  ----------
//  --------------------------------------------------


//  -----  Ruta base y del favicon  -----  
const base = '/udemy.antonydev.tech/master-css';
const favicon = `${base}/assets/favicon/less-favicon.ico`;

//  -----  Rutas de las hojas de estilos  -----
const stylesLess = `${base}/assets/css/less.css`;


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
const sectionLess = [

    {
        id: 'cssLess',
        url: `${base}/aprendiendo-less/index.html`,
        title: 'Aprendiendo Less',
        path: '/aprendiendo-less/index.html',
        favicon: favicon,
        styles: stylesLess
    }
    
];


export { sectionLess };
