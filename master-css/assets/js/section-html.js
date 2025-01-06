//  --------------------------------------------------
//  ----------  /udemy.antonydev.tech/  --------------
//  ----------  /master-css/  ------------------------
//  ----------  /assets/js/section-html.js  ----------
//  --------------------------------------------------


const base = '/udemy.antonydev.tech/master-css';
const favicon = `${base}/assets/favicon/html5-favicon.ico`;
const stylesIndex = `${base}/assets/css/styles.css`;


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
const sectionHtml = [

    {
        id: 'htmlIndex',
        url: `${base}/repaso-html/index.html`,
        title: 'Repaso HTML 5',
        path: '/index.html',
        favicon: favicon,
        styles: stylesIndex
    },

    {
        id: 'htmlContenidos',
        url: `${base}/repaso-html/contenidos/index.html`,
        title: 'Contenidos',
        path: '/repaso-html/contenidos/index.html',
        favicon: favicon,
        styles: stylesIndex

    },

    {
        id: 'htmlContactos',
        url: `${base}/repaso-html/contactos/index.html`,
        title: 'Contactos',
        path: '/repaso-html/contactos/index.html',
        favicon: favicon,
        styles: stylesIndex

    }
    
];


export { sectionHtml };
