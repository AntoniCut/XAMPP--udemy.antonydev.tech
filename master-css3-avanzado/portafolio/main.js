//  ----------------------------------------------  
//  ----------  /udemy.antonydev.tech/  ----------  
//  ----------  /master-css3-avanzado/  ----------  
//  ----------  /portafolio/  --------------------  
//  ----------  /main.js  ------------------------  
//  ----------------------------------------------



$(document).ready(function () {

    console.warn($.fn.jquery);

    const $layoutContent = $("#layoutContent");

    //  -----  Ruta Base del Proyecto  -----
    const base = '/udemy.antonydev.tech/master-css3-avanzado/portafolio';


    //  -----  Rutas HTML  -----
    const homeHtml = `${base}/home/index.html`;
    const sobreMiHtml = `${base}/sobre-mi/index.html`;
    const curriculumHtml = `${base}/curriculum/index.html`;
    const portafolioHtml = `${base}/portafolio/index.html`;
    const blogHtml = `${base}/blog/index.html`;
    const contactoHtml = `${base}/contacto/index.html`;

    //  -----  Rutas CSS  -----
    const allCss = `${base}/assets/fonts/fontawesome-free-6.1.2-web/css/all.min.css`;
    const poppinsCss = `${base}/assets/fonts/poppins/poppins.css`;
    const resetCss = `${base}/assets/css/reset.css`;
    const scrollCss = `${base}/assets/css/scroll.css`;
    const stylesCss = `${base}/assets/css/styles.css`;
    const loaderCss = `${base}/assets/css/loader.css`;
    const responsiveCss = `${base}/assets/css/responsive.css`;


    loadCss();
    loadHtml(homeHtml);


    //  ---------------------------------------------------------------
    //  ----------  Carga de las Fuentes y Hojas de Estilos  ----------
    //  ---------------------------------------------------------------
    function loadCss() {

        const head = $("head");
        head.append(`<link rel="stylesheet" href=${allCss} />`);
        head.append(`<link rel="stylesheet" href=${poppinsCss} />`);
        head.append(`<link rel="stylesheet" href=${resetCss} />`);
        head.append(`<link rel="stylesheet" href=${scrollCss} />`);
        head.append(`<link rel="stylesheet" href=${stylesCss} />`);
        head.append(`<link rel="stylesheet" href=${responsiveCss} />`);
        head.append(`<link rel="stylesheet" href=${loaderCss} />`);
    }


    //  -----------------------------------------------------------------
    //  ----------  Carga del HTML en el index.html principal  ----------
    //  -----------------------------------------------------------------
    function loadHtml(urlHtml) {

        $layoutContent.load(urlHtml, function (response, status, xhr) {

            if (status === "error") console.error(`Error al cargar el contenido: ${xhr.status} ${xhr.statusText}`);

            else console.log("Contenido cargado correctamente.");

        });
    }


    //  ---------------------------------------------------------------
    //  ----------  Carga el Mapa de la Página de Contactos  ----------
    //  ---------------------------------------------------------------

    function loadMapa() {

        const $iframe = $(".contact__iframe");
        const $loader = $(".loader");

        console.log('iframe', $iframe);
        console.log('loader', $loader);

        //$loader.css('display', 'grid');
        //$loader.show();
        //$iframe.css('display', 'none');
        $iframe.hide();


        setTimeout(() => {
            //$loader.css('display', 'none');
            $loader.remove();
            //$iframe.css('display', 'block');
            $iframe.show();
        }, 5000);
    }



    //  -----------------------------------------------------------
    //  ----------  Manejador de clics para los enlaces  ----------
    //  -----------------------------------------------------------
    $(document).on('click', 'a[id]', function (event) {

        event.preventDefault(); // Previene el comportamiento predeterminado

        //loadJs();

        const id = $(this).attr('id');

        // Elimina la clase 'menu__link--active' de todos los enlaces del menú
        $('a.menu__link--active').removeClass('menu__link--active');


        if (id === 'home') {
            document.title = 'Maquetación Web 1 - Portafolio';
            history.pushState(null, '', homeHtml);
            loadHtml(homeHtml);
            $(this).addClass('menu__link--active');

        }

        if (id === 'sobreMi') {
            document.title = 'Sobre Mí';
            history.pushState(null, '', sobreMiHtml);
            loadHtml(sobreMiHtml);
            $(this).addClass('menu__link--active');
        }

        if (id === 'curriculum') {
            document.title = 'Curriculum';
            history.pushState(null, '', curriculumHtml);
            loadHtml(curriculumHtml);
            $(this).addClass('menu__link--active');
        }

        if (id === 'portafolio') {
            document.title = 'Portafolio';
            history.pushState(null, '', portafolioHtml);
            loadHtml(portafolioHtml);
            $(this).addClass('menu__link--active');
        }

        if (id === 'blog') {
            document.title = 'Blog';
            history.pushState(null, '', blogHtml);
            loadHtml(blogHtml);
            $(this).addClass('menu__link--active');
        }

        if (id === 'contacto') {
            document.title = 'Contacto';
            history.pushState(null, '', contactoHtml);
            loadHtml(contactoHtml);
            $(this).addClass('menu__link--active');
            loadMapa();

        }

    });


    //  ----------------------------------------------------------------
    //  ----------  Escuchar el evento de salir de la página  ----------
    //  ----------------------------------------------------------------
    window.addEventListener("beforeunload", function (event) {

        //  -----  Mostrar un mensaje de advertencia al intentar abandonar la página  -----
        const message = "¿Estás seguro de que deseas salir?";
        event.returnValue = message;  // Standard para algunos navegadores
        return message;  // Necesario para otros navegadores
    });


    //  ----------------------------------------------------------
    //  ----------  Manejar retrocesos en el historial  ----------
    //  ----------------------------------------------------------
    window.addEventListener('popstate', function (event) {

        document.title = 'Maquetación Web 1 - Portafolio';
        history.pushState(null, '', homeHtml);
        //history.replaceState(null, '', window.location.href);
        loadHtml(homeHtml);
    });


});


