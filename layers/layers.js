var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_fnsvistoria_1 = new ol.format.GeoJSON();
var features_fnsvistoria_1 = format_fnsvistoria_1.readFeatures(json_fnsvistoria_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fnsvistoria_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fnsvistoria_1.addFeatures(features_fnsvistoria_1);
var lyr_fnsvistoria_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fnsvistoria_1, 
                style: style_fnsvistoria_1,
                interactive: true,
    title: 'fns-vistoria<br />\
    <img src="styles/legend/fnsvistoria_1_0.png" /> 1<br />\
    <img src="styles/legend/fnsvistoria_1_1.png" /> 2<br />\
    <img src="styles/legend/fnsvistoria_1_2.png" /> 3<br />\
    <img src="styles/legend/fnsvistoria_1_3.png" /> 4<br />\
    <img src="styles/legend/fnsvistoria_1_4.png" /> 5<br />\
    <img src="styles/legend/fnsvistoria_1_5.png" /> <br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_fnsvistoria_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_fnsvistoria_1];
lyr_fnsvistoria_1.set('fieldAliases', {'Name': 'Name', 'LOTE': 'LOTE', 'KM_REAL': 'KM_REAL', 'DESCRICAO': 'DESCRICAO', 'DIA': 'DIA', 'TRAJETO': 'TRAJETO', 'FASE': 'FASE', 'OBSERVACAO': 'OBSERVACAO', });
lyr_fnsvistoria_1.set('fieldImages', {'Name': 'TextEdit', 'LOTE': 'TextEdit', 'KM_REAL': 'TextEdit', 'DESCRICAO': 'TextEdit', 'DIA': 'TextEdit', 'TRAJETO': 'TextEdit', 'FASE': 'TextEdit', 'OBSERVACAO': 'TextEdit', });
lyr_fnsvistoria_1.set('fieldLabels', {'Name': 'no label', 'LOTE': 'no label', 'KM_REAL': 'no label', 'DESCRICAO': 'no label', 'DIA': 'no label', 'TRAJETO': 'no label', 'FASE': 'no label', 'OBSERVACAO': 'no label', });
lyr_fnsvistoria_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});