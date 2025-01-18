//  ------------------------------------------------
//  ----------  /udemy.antonydev.tech/  ------------
//  ----------  /master-css/  ----------------------
//  ----------  /assets/js/main.js  ----------------
//  ------------------------------------------------


import { sectionHtml } from './section-html.js';
import { sectionCss } from './section-css.js';
import { sectionSass } from './section-sass.js';
import { sectionLess } from './section-less.js';
import { sectionResponsive } from './section-responsive.js';
import { sectionFlexBox } from './section-flexbox.js';
import { sectionGridLayout } from './section-gridlayout.js';
import { sectionBootstrap } from './section-bootstrap.js';



$(function () {

    console.warn('main.js is loaded - jQuery is ready! - version:', $.fn.jquery);

    const $layoutContent = $('#layoutContent');

    const base = '/udemy.antonydev.tech/master-css';

    const allSections = [
        ...sectionHtml,
        ...sectionCss,
        ...sectionSass,
        ...sectionLess,
        ...sectionResponsive,
        ...sectionFlexBox,
        ...sectionGridLayout,
        ...sectionBootstrap
    ];




    //  ----------------------------------------------------------------------------------------------------
    //  ----------  Función que Carga el HTML Dinamicamente utilizando la función load de jQuery  ----------
    //  ----------------------------------------------------------------------------------------------------

    function loadContent($container, url, title, path, favicon, cssFile, scriptFile) {

        $container.load(url, function (response, status, xhr) {

            if (status === "error") {
                console.error(`Error al cargar la ruta: ${url}`, xhr.status, xhr.statusText);
                $container.html('<p>Error 404: El contenido no se pudo cargar.</p>'); // Fallback

            } else {

                console.log(`Contenido cargado desde: ${url}`);

                //  -----  Cambiamos el TITLE de la página  -----
                document.title = title;

                //  -----  cambiamos la URL de la página  -----
                const newUrl = `${base}${path}`;
                history.pushState(null, '', newUrl);
                console.log(`URL actualizada a: ${newUrl}`);

                //  -----  cambiamos el FAVICON de la página  -----
                let $favicon = $('link[rel~="icon"]');

                //  -----  Si No existe el favicon lo crea  -----
                if ($favicon.length === 0) $favicon = $('<link rel="icon" type="image/x-icon">').appendTo('head');

                //  -----  Cambia la ruta del favicon con una linea de tiempo para no ser cacheado  -----
                $favicon.attr('href', `${favicon}?t=${new Date().getTime()}`);


                //  -----  Cargamos los ESTILOS de la página  -----

                if (cssFile) {

                    //  -----  Comprobación de la URL que se va a cargar  -----
                    //alert(cssFile); 

                    //  ----- Eliminar cualquier hoja de estilos existente que coincida  -----
                    //  ----- con el patrón base del proyecto, excepto dtyles.css        -----
                    $('link[rel="stylesheet"]').not('[href*="styles.css"]').remove();

                    //  -----  Asegurarse de que siempre esté cargada la hoja de estilos styles.css  -----
                    if ($('link[href*="styles.css"]').length === 0) {
                        $('<link rel="stylesheet">')
                            .attr('href', `${base}/assets/css/styles.css?t=${new Date().getTime()}`)
                            .appendTo('head');
                    }

                    //  -----  Agregar la nueva hoja de estilos con un timestamp para evitar caché  -----
                    $('<link rel="stylesheet">')
                        .attr('href', `${cssFile}?t=${new Date().getTime()}`)
                        .appendTo('head');

                    //  -----  Agregar la hoja de estilos de Bootstrap 4  -----
                    $('<link rel="stylesheet">')
                        .attr('href', `${base}/assets/bootstrap-4/css/bootstrap.min.css?t=${new Date().getTime()}`)
                        .appendTo('head');
                }


                //  -----  Cargar script de las secciones  -----
                if (scriptFile) {
                    loadScriptIfExists(scriptFile);
                }


            }
        });
    }



    //  ------------------------------------------------------------------
    //  ----------  Función que Carga un Script si este Existe  ----------
    //  ------------------------------------------------------------------

    function loadScriptIfExists(scriptUrl) {
        
        const script = `${scriptUrl}?t=${new Date().getTime()}`;

        return $.ajax({
            
            url: script,
            type: 'HEAD', // Verifica si el script existe
            
            success: function () {
                
                console.log(`El script ${script} existe. Procediendo a cargarlo...`);
                
                $.getScript(script)
                    .done(function () {
                        console.log(`Script cargado exitosamente: ${script}`);
                    })
                    .fail(function (jqxhr, settings, exception) {
                        console.error(`Error al cargar el script ${script}:`, exception);
                    });
            },
            error: function () {
                console.warn(`El script ${script} no existe. No se cargará.`);
            }
        });
    }



    //  ------------------------------------------------
    //  ----------  Cargar contenido inicial  ----------
    //  ------------------------------------------------
    const initialPath = window.location.pathname.replace(base, '');
    const initialSection = allSections.find(section => section.path === initialPath);

    if (initialSection) {

        loadContent(
            $layoutContent,
            initialSection.url,
            initialSection.title,
            initialSection.path,
            initialSection.favicon,
            initialSection.styles,
            initialSection.script
        );
    }

    else {

        loadContent(
            $layoutContent,
            `${base}/aprendiendo-css/index.html`,
            'Master de CSS',
            '/aprendiendo-css/index.html',
            `${base}/assets/favicon/css3-favicon.ico`,
            `${base}/assets/css/styles.css`
        );
    }


    //  -----------------------------------------------------------
    //  ----------  Manejador de clics para los enlaces  ----------
    //  -----------------------------------------------------------
    $(document).on('click', 'a[id]', function (event) {

        event.preventDefault(); // Previene el comportamiento predeterminado

        const id = $(this).attr('id');
        //const section = sections.find(sec => sec.id === id);
        const section = allSections.find(sec => sec.id === id);

        if (section) {

            console.log(`Clic en: ${id}`);
            loadContent(
                $layoutContent,
                section.url,
                section.title,
                section.path,
                section.favicon,
                section.styles,
                section.script
            );
        }
    });


    //  ----------------------------------------------------------
    //  ----------  Manejar retrocesos en el historial  ----------
    //  ----------------------------------------------------------
    window.addEventListener('popstate', function () {

        console.log('Navegación en el historial detectada:', window.location.pathname);

        const matchedSection = allSections.find(section => section.path === window.location.pathname.replace(base, ''));

        if (matchedSection) {
            loadContent(
                $layoutContent,
                matchedSection.url,
                matchedSection.title,
                matchedSection.path,
                matchedSection.favicon,
                matchedSection.styles,
                matchedSection.script
            );

        } else {
            $layoutContent.load(`${base}/aprendiendo-css/selectores/index.html`);
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


});
