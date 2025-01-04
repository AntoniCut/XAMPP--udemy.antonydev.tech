//  ------------------------------------------------
//  ----------  /udemy.antonydev.tech/  ------------
//  ----------  /curso-html5-desde-cero/  ----------
//  ----------  /assets/js/main.js  ----------------
//  ------------------------------------------------


import { sectionHtml } from './section-html.js';  
import { sectionProyecto } from './section-proyecto.js';
import { sectionCss } from './section-css.js';  


$(function () {

    console.warn('main.js is loaded - jQuery is ready! - version:', $.fn.jquery);

    const $layoutContent = $('#layoutContent');

    const base = '/udemy.antonydev.tech/curso-html5-desde-cero';
    //const base = '/curso-html5-desde-cero';
            
    const allSections = [...sectionHtml, ...sectionProyecto, ...sectionCss];

    //  ------------------------------------------------------------------
    //  ----------  Función para manejar la carga de contenido  ----------
    //  ------------------------------------------------------------------

    function loadContent($container, url, title, path) {
        
        $container.load(url, function (response, status, xhr) {
            
            if (status === "error") {
                console.error(`Error al cargar la ruta: ${url}`, xhr.status, xhr.statusText);
                $container.html('<p>Error 404: El contenido no se pudo cargar.</p>'); // Fallback
            
            } else {
                
                console.log(`Contenido cargado desde: ${url}`);
                document.title = title;
                const newUrl = `${base}${path}`;
                history.pushState(null, '', newUrl);
                console.log(`URL actualizada a: ${newUrl}`);
            }
        });
    }


    //  ------------------------------------------------
    //  ----------  Cargar contenido inicial  ----------
    //  ------------------------------------------------
    const initialPath = window.location.pathname.replace(base, '');
    const initialSection = allSections.find(section => section.path === initialPath);

    if (initialSection) loadContent($layoutContent, initialSection.url, initialSection.title, initialSection.path);
    else $layoutContent.load(`${base}/aprendiendo-html5/index.html`);
    

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
            loadContent($layoutContent, section.url, section.title, section.path);
        }
    });


    //  ----------------------------------------------------------
    //  ----------  Manejar retrocesos en el historial  ----------
    //  ----------------------------------------------------------
    window.addEventListener('popstate', function () {
        
        console.log('Navegación en el historial detectada:', window.location.pathname);
        
        const matchedSection = allSections.find(section => section.path === window.location.pathname.replace(base, ''));
        
        if (matchedSection) {
            loadContent($layoutContent, matchedSection.url, matchedSection.title, matchedSection.path);
        } else {
            $layoutContent.load(`${base}/aprendiendo-html5/index.html`);
        }
    });


    //  ----------------------------------------------------------------
    //  ----------  Escuchar el evento de salir de la página  ----------
    //  ----------------------------------------------------------------
    window.addEventListener("beforeunload", function(event) {
        
        //  -----  Mostrar un mensaje de advertencia al intentar abandonar la página  -----
        const message = "¿Estás seguro de que deseas salir?";
        event.returnValue = message;  // Standard para algunos navegadores
        return message;  // Necesario para otros navegadores
    });

    
});
