window.mapa = null;

function loadMap() {
    var latLng = new google.maps.LatLng(-20.4824449, -54.6015138);

    var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    window.map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

    new google.maps.Marker({
        position: latLng,
        map: window.map,
    });

    mapearRelatos();
}

function mapearRelatos() {
    var mapaDeIcones = {
        0: 'car',
        1: 'cash',
        2: 'flame'
    };

    $.getJSON('/Relato/ObterTodos')
        .then(function(relatos) {

            for (var index = 0; index < relatos.length; index++) {
                var relato = relatos[index];

                var latLng = new google.maps.LatLng(parseFloat(relato.Latitude),
                    parseFloat(relato.Longitude));

                new google.maps.Marker({
                    position: latLng,
                    map: window.map,
                    icon: '/Content/images/' + mapaDeIcones[relato.TipoDeRelato] + '.png',
                    title: relato.Descricao
                });
            }
        });
    
}

loadMap();