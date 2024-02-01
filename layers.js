ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([525509.126368, 4288773.957938, 583068.729662, 4319012.315664]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_mup_02_1 = new ol.format.GeoJSON();
var features_mup_02_1 = format_mup_02_1.readFeatures(json_mup_02_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_mup_02_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mup_02_1.addFeatures(features_mup_02_1);
var lyr_mup_02_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mup_02_1, 
                style: style_mup_02_1,
                interactive: true,
                title: '<img src="styles/legend/mup_02_1.png" /> mup_02'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_mup_02_1.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_mup_02_1];
lyr_mup_02_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'MONTES02_': 'MONTES02_', 'MONTES02_I': 'MONTES02_I', 'ETIQUETA': 'ETIQUETA', 'ID': 'ID', 'NOMBRE': 'NOMBRE', 'TéRMINO_MU': 'TéRMINO_MU', 'PROVINCIA': 'PROVINCIA', 'FUENTE': 'FUENTE', 'CUP': 'CUP', 'CLAVE': 'CLAVE', 'PROPIEDAD': 'PROPIEDAD', 'DESLINDE': 'DESLINDE', 'AMOJONAMIE': 'AMOJONAMIE', 'OBSERVACIO': 'OBSERVACIO', 'SUBCLASS': 'SUBCLASS', 'Label_ID': 'Label_ID', });
lyr_mup_02_1.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'MONTES02_': '', 'MONTES02_I': '', 'ETIQUETA': '', 'ID': '', 'NOMBRE': '', 'TéRMINO_MU': '', 'PROVINCIA': '', 'FUENTE': '', 'CUP': '', 'CLAVE': '', 'PROPIEDAD': '', 'DESLINDE': '', 'AMOJONAMIE': '', 'OBSERVACIO': '', 'SUBCLASS': '', 'Label_ID': '', });
lyr_mup_02_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'MONTES02_': 'no label', 'MONTES02_I': 'no label', 'ETIQUETA': 'no label', 'ID': 'no label', 'NOMBRE': 'no label', 'TéRMINO_MU': 'no label', 'PROVINCIA': 'no label', 'FUENTE': 'no label', 'CUP': 'no label', 'CLAVE': 'no label', 'PROPIEDAD': 'no label', 'DESLINDE': 'no label', 'AMOJONAMIE': 'no label', 'OBSERVACIO': 'no label', 'SUBCLASS': 'no label', 'Label_ID': 'no label', });
lyr_mup_02_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});