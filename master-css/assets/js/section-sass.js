//  --------------------------------------------------
//  ----------  /udemy.antonydev.tech/  --------------
//  ----------  /master-css/  ------------------------
//  ----------  /assets/js/section-sass.js  ----------
//  --------------------------------------------------


//  -----  Ruta base y del favicon  -----  
const base = '/udemy.antonydev.tech/master-css';
const favicon = `${base}/assets/favicon/sass-favicon.ico`;

//  -----  Rutas de las hojas de estilos  -----
const stylesSass = `${base}/assets/css/sass.css`;



//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
const sectionSass = [

    {
        id: 'cssSass',
        url: `${base}/aprendiendo-sass/index.html`,
        title: 'Aprendiendo SASS',
        path: '/aprendiendo-sass/index.html',
        favicon: favicon,
        styles: stylesSass
    }
    
];


export { sectionSass };