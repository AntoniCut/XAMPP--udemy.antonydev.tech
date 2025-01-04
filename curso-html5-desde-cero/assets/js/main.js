//  ------------------------------------------------
//  ----------  /udemy.antonydev.tech/  ------------
//  ----------  /curso-html5-desde-cero/  ----------
//  ----------  /assets/js/main.js  ----------------
//  ------------------------------------------------



$(function () {

    console.warn('main.js is loaded - jQuery is ready! - version:', $.fn.jquery);

    const $layoutContent = $('#layoutContent');

    const base = '/udemy.antonydev.tech/curso-html5-desde-cero';
    //const base = '/curso-html5-desde-cero';
    
    
    //  -----  Array de objetos con los IDs y las rutas correspondientes  -----
    const sections = [

        {
            id: 'htmlEstructura',
            url: `${base}/aprendiendo-html5/estructura/index.html`,
            title: 'Estructura de un documento HTML5',
            path: '/estructura/index.html'
        },

        {
            id: 'htmlListas',
            url: `${base}/aprendiendo-html5/listas/index.html`,
            title: 'Listas en HTML5',
            path: '/listas/index.html'
        },

        {
            id: 'htmlImagenes',
            url: `${base}/aprendiendo-html5/imagenes/index.html`,
            title: 'Imagenes en HTML5',
            path: '/imagenes/index.html'
        },

        {
            id: 'htmlAudio',
            url: `${base}/aprendiendo-html5/audio/index.html`,
            title: 'Audios en HTML5',
            path: '/audio/index.html'
        },

        {
            id: 'htmlVideo',
            url: `${base}/aprendiendo-html5/video/index.html`,
            title: 'Videos en HTML5',
            path: '/video/index.html'
        },

        {
            id: 'htmlIFrame',
            url: `${base}/aprendiendo-html5/iframe/index.html`,
            title: 'iFrames en HTML5',
            path: '/iframe/index.html'
        },

        {
            id: 'htmlTablas',
            url: `${base}/aprendiendo-html5/tablas/index.html`,
            title: 'Tablas en HTML5',
            path: '/tablas/index.html'
        },

        {
            id: 'htmlFormularios',
            url: `${base}/aprendiendo-html5/formularios/index.html`,
            title: 'Formularios en HTML5',
            path: '/formularios/index.html'
        },

        {
            id: 'htmlEtiquetas',
            url: `${base}/aprendiendo-html5/mas-etiquetas-html5/index.html`,
            title: 'Mas Etiquetas en HTML5',
            path: '/mas-etiquetas-html5/index.html'
        }
    ];


    // Función para manejar la carga de contenido
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

                // console.log(`Contenido cargado desde: ${url}`);
                // document.title = title;
                // history.pushState(null, '', base + path); // Actualiza la URL
                // console.log(`URL actualizada a: ${base}${path}`);
            }
        });
    }



    // Cargar contenido inicial
    const initialPath = window.location.pathname.replace(base, '');
    const initialSection = sections.find(section => section.path === initialPath);

    if (initialSection) {
        loadContent($layoutContent, initialSection.url, initialSection.title, initialSection.path);
    } else {
        $layoutContent.load(`${base}/aprendiendo-html5/index.html`);
    }

  

    // Cargar contenido inicial
    $layoutContent.load(`${base}/aprendiendo-html5/index.html`);



    // Manejador de clics para los enlaces
    $(document).on('click', 'a[id]', function (event) {
        
        event.preventDefault(); // Previene el comportamiento predeterminado
        
        const id = $(this).attr('id');
        const section = sections.find(sec => sec.id === id);
        
        if (section) {
            console.log(`Clic en: ${id}`);
            loadContent($layoutContent, section.url, section.title, section.path);
        }
    });


    // Manejar retrocesos en el historial
    window.addEventListener('popstate', function () {
        
        console.log('Navegación en el historial detectada:', window.location.pathname);
        
        const matchedSection = sections.find(section => section.path === window.location.pathname.replace(base, ''));
        
        if (matchedSection) {
            loadContent($layoutContent, matchedSection.url, matchedSection.title, matchedSection.path);
        } else {
            $layoutContent.load(`${base}/aprendiendo-html5/index.html`);
        }
    });


    // Escuchar el evento de salir de la página
    window.addEventListener("beforeunload", function(event) {
        // Mostrar un mensaje de advertencia al intentar abandonar la página
        const message = "¿Estás seguro de que deseas salir?";
        event.returnValue = message;  // Standard para algunos navegadores
        return message;  // Necesario para otros navegadores
        
    });

    
});
