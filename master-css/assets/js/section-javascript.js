//  --------------------------------------------------------
//  ----------  /udemy.antonydev.tech/  --------------------
//  ----------  /master-css/  ------------------------------
//  ----------  /assets/js/section-javascript.js  ----------
//  --------------------------------------------------------


//  -----  Ruta base y del favicon  -----  
const base = '/udemy.antonydev.tech/master-css';
const favicon = `${base}/assets/favicon/js-favicon.ico`;

//  -----  Rutas de las hojas de estilos  -----
const stylesJS = `${base}/assets/css/styles.css`;


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
const sectionJavaScript = [

    {
        id: 'cssJavaScript',
        url: `${base}/repaso-javascript/index.html`,
        title: 'Repaso Rápido de JavaScript',
        path: '/repaso-javascript/index.html',
        favicon: favicon,
        styles: stylesJS
    }
    
];


export { sectionJavaScript };
