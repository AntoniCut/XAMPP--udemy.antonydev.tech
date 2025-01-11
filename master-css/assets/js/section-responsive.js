//  --------------------------------------------------------
//  ----------  /udemy.antonydev.tech/  --------------------
//  ----------  /master-css/  ------------------------------
//  ----------  /assets/js/section-responsive.js  ----------
//  --------------------------------------------------------


//  -----  Ruta base y del favicon  -----  
const base = '/udemy.antonydev.tech/master-css';
const favicon = `${base}/assets/favicon/css3-favicon.ico`;

//  -----  Rutas de las hojas de estilos  -----
const stylesResponsive = `${base}/assets/css/responsive.css`;


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
const sectionResponsive = [

    {
        id: 'cssResponsive',
        url: `${base}/aprendiendo-responsive/index.html`,
        title: 'Aprendiendo Responsive',
        path: '/aprendiendo-responsive/index.html',
        favicon: favicon,
        styles: stylesResponsive
    }
    
];


export { sectionResponsive };
