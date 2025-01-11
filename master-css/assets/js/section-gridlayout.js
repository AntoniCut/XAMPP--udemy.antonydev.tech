//  ------------------------------------------------------
//  ----------  /udemy.antonydev.tech/  ------------------
//  ----------  /master-css/  ----------------------------
//  ----------  /assets/js/section-gridlayout.js  --------
//  ------------------------------------------------------


//  -----  Ruta base y del favicon  -----  
const base = '/udemy.antonydev.tech/master-css';
const favicon = `${base}/assets/favicon/css3-favicon.ico`;

//  -----  Rutas de las hojas de estilos  -----
const stylesGridLayout = `${base}/assets/css/gridlayout.css`;


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
const sectionGridLayout = [

    {
        id: 'cssGridLayout',
        url: `${base}/aprendiendo-gridlayout/index.html`,
        title: 'Aprendiendo GridLayout',
        path: '/aprendiendo-gridlayout/index.html',
        favicon: favicon,
        styles: stylesGridLayout
    }
    
];


export { sectionGridLayout };
