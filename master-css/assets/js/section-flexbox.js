//  -----------------------------------------------------
//  ----------  /udemy.antonydev.tech/  -----------------
//  ----------  /master-css/  ---------------------------
//  ----------  /assets/js/section-flexbox.js  ----------
//  -----------------------------------------------------


//  -----  Ruta base y del favicon  -----  
const base = '/udemy.antonydev.tech/master-css';
const favicon = `${base}/assets/favicon/css3-favicon.ico`;

//  -----  Rutas de las hojas de estilos  -----
const stylesFlexBox = `${base}/assets/css/flexbox.css`;


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
const sectionFlexBox = [

    {
        id: 'cssFlexBox',
        url: `${base}/aprendiendo-flexbox/index.html`,
        title: 'Aprendiendo FlexBox',
        path: '/aprendiendo-flexbox/index.html',
        favicon: favicon,
        styles: stylesFlexBox
    }
    
];


export { sectionFlexBox };
