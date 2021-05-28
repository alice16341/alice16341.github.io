var wms_layers = [];

var format_Routes_Tournees_0 = new ol.format.GeoJSON();
var features_Routes_Tournees_0 = format_Routes_Tournees_0.readFeatures(json_Routes_Tournees_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routes_Tournees_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routes_Tournees_0.addFeatures(features_Routes_Tournees_0);
var lyr_Routes_Tournees_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Routes_Tournees_0, 
                style: style_Routes_Tournees_0,
                interactive: true,
                title: '<img src="styles/legend/Routes_Tournees_0.png" /> Routes_Tournees'
            });
var format_Union_1 = new ol.format.GeoJSON();
var features_Union_1 = format_Union_1.readFeatures(json_Union_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Union_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Union_1.addFeatures(features_Union_1);
var lyr_Union_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Union_1, 
                style: style_Union_1,
                interactive: true,
    title: 'Union<br />\
    <img src="styles/legend/Union_1_0.png" /> BOM11_Penot<br />\
    <img src="styles/legend/Union_1_1.png" /> BOM162_Baratto<br />\
    <img src="styles/legend/Union_1_2.png" /> BOM163_Sauvageot<br />\
    <img src="styles/legend/Union_1_3.png" /> BOM181_MartinCh<br />\
    <img src="styles/legend/Union_1_4.png" /> BOM191_Boulin<br />\
    <img src="styles/legend/Union_1_5.png" /> <br />'
        });
var format_Macon_STL_Charnay_Sance_2 = new ol.format.GeoJSON();
var features_Macon_STL_Charnay_Sance_2 = format_Macon_STL_Charnay_Sance_2.readFeatures(json_Macon_STL_Charnay_Sance_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Macon_STL_Charnay_Sance_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Macon_STL_Charnay_Sance_2.addFeatures(features_Macon_STL_Charnay_Sance_2);
var lyr_Macon_STL_Charnay_Sance_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Macon_STL_Charnay_Sance_2, 
                style: style_Macon_STL_Charnay_Sance_2,
                interactive: true,
                title: '<img src="styles/legend/Macon_STL_Charnay_Sance_2.png" /> Macon_STL_Charnay_Sance'
            });
var format_Saone_3 = new ol.format.GeoJSON();
var features_Saone_3 = format_Saone_3.readFeatures(json_Saone_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saone_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saone_3.addFeatures(features_Saone_3);
var lyr_Saone_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Saone_3, 
                style: style_Saone_3,
                interactive: true,
                title: '<img src="styles/legend/Saone_3.png" /> Saone'
            });

lyr_Routes_Tournees_0.setVisible(true);lyr_Union_1.setVisible(true);lyr_Macon_STL_Charnay_Sance_2.setVisible(true);lyr_Saone_3.setVisible(true);
var layersList = [lyr_Routes_Tournees_0,lyr_Union_1,lyr_Macon_STL_Charnay_Sance_2,lyr_Saone_3];
lyr_Routes_Tournees_0.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'tunnel': 'tunnel', 'maxspeed': 'maxspeed', 'osm_id_2': 'osm_id_2', 'name_2': 'name_2', 'type_2': 'type_2', 'oneway_2': 'oneway_2', 'bridge_2': 'bridge_2', 'tunnel_2': 'tunnel_2', 'maxspeed_2': 'maxspeed_2', });
lyr_Union_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'osm_id_2': 'osm_id_2', 'name_2': 'name_2', 'fid_2': 'fid_2', 'osm_id_3': 'osm_id_3', 'name_3': 'name_3', 'osm_id_2_2': 'osm_id_2_2', 'name_2_2': 'name_2_2', 'type_2_2': 'type_2_2', 'osm_id_3_2': 'osm_id_3_2', 'name_3_2': 'name_3_2', 'osm_id_2_1': 'osm_id_2_1', 'name_2_2_2': 'name_2_2_2', 'type_2_2_2': 'type_2_2_2', 'fid_2_2': 'fid_2_2', 'osm_id_4': 'osm_id_4', 'name_4': 'name_4', 'type_4': 'type_4', 'osm_id_2_3': 'osm_id_2_3', 'name_2_3': 'name_2_3', 'osm_id_3_1': 'osm_id_3_1', 'name_3_2_2': 'name_3_2_2', 'osm_id_2_4': 'osm_id_2_4', 'name_2_2_1': 'name_2_2_1', 'fid_3': 'fid_3', 'osm_id_5': 'osm_id_5', 'name_5': 'name_5', 'layer': 'layer', 'path': 'path', 'Orange_fin': 'Orange_fin', 'Orange_f_1': 'Orange_f_1', 'Orange_f_2': 'Orange_f_2', 'Orange_f_3': 'Orange_f_3', 'Orange_f_4': 'Orange_f_4', 'Orange_f_5': 'Orange_f_5', 'Orange_f_6': 'Orange_f_6', 'Orange_f_7': 'Orange_f_7', 'Orange_f_8': 'Orange_f_8', 'Orange_f_9': 'Orange_f_9', 'Orange_f10': 'Orange_f10', 'Orange_f11': 'Orange_f11', 'Orange_f12': 'Orange_f12', 'osm_id': 'osm_id', 'name_6': 'name_6', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'tunnel': 'tunnel', 'maxspeed': 'maxspeed', 'osm_id_2_5': 'osm_id_2_5', 'name_2_4': 'name_2_4', 'type_2': 'type_2', 'oneway_2': 'oneway_2', 'bridge_2': 'bridge_2', 'tunnel_2': 'tunnel_2', 'maxspeed_2': 'maxspeed_2', 'osm_id_6': 'osm_id_6', 'name_7': 'name_7', 'type_3': 'type_3', 'oneway_3': 'oneway_3', 'bridge_3': 'bridge_3', 'tunnel_3': 'tunnel_3', 'maxspeed_3': 'maxspeed_3', 'osm_id_2_6': 'osm_id_2_6', 'name_2_5': 'name_2_5', 'type_2_3': 'type_2_3', 'oneway_2_2': 'oneway_2_2', 'bridge_2_2': 'bridge_2_2', 'tunnel_2_2': 'tunnel_2_2', 'maxspeed_1': 'maxspeed_1', });
lyr_Macon_STL_Charnay_Sance_2.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'insee_2': 'insee_2', 'nom_2': 'nom_2', 'wikipedia_': 'wikipedia_', 'surf_ha_2': 'surf_ha_2', 'insee_2_2': 'insee_2_2', 'nom_2_2': 'nom_2_2', 'wikipedi_1': 'wikipedi_1', 'surf_ha_2_': 'surf_ha_2_', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_Saone_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'width': 'width', });
lyr_Routes_Tournees_0.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'tunnel': 'Range', 'maxspeed': 'Range', 'osm_id_2': 'TextEdit', 'name_2': 'TextEdit', 'type_2': 'TextEdit', 'oneway_2': 'Range', 'bridge_2': 'Range', 'tunnel_2': 'Range', 'maxspeed_2': 'Range', });
lyr_Union_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'osm_id_2': 'TextEdit', 'name_2': 'TextEdit', 'fid_2': 'TextEdit', 'osm_id_3': 'TextEdit', 'name_3': 'TextEdit', 'osm_id_2_2': 'TextEdit', 'name_2_2': 'TextEdit', 'type_2_2': 'TextEdit', 'osm_id_3_2': 'TextEdit', 'name_3_2': 'TextEdit', 'osm_id_2_1': 'TextEdit', 'name_2_2_2': 'TextEdit', 'type_2_2_2': 'TextEdit', 'fid_2_2': 'TextEdit', 'osm_id_4': 'TextEdit', 'name_4': 'TextEdit', 'type_4': 'TextEdit', 'osm_id_2_3': 'TextEdit', 'name_2_3': 'TextEdit', 'osm_id_3_1': 'TextEdit', 'name_3_2_2': 'TextEdit', 'osm_id_2_4': 'TextEdit', 'name_2_2_1': 'TextEdit', 'fid_3': 'TextEdit', 'osm_id_5': 'TextEdit', 'name_5': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Orange_fin': 'TextEdit', 'Orange_f_1': 'TextEdit', 'Orange_f_2': 'TextEdit', 'Orange_f_3': 'Range', 'Orange_f_4': 'Range', 'Orange_f_5': 'Range', 'Orange_f_6': 'Range', 'Orange_f_7': 'TextEdit', 'Orange_f_8': 'TextEdit', 'Orange_f_9': 'Range', 'Orange_f10': 'Range', 'Orange_f11': 'Range', 'Orange_f12': 'Range', 'osm_id': 'TextEdit', 'name_6': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'tunnel': 'Range', 'maxspeed': 'Range', 'osm_id_2_5': 'TextEdit', 'name_2_4': 'TextEdit', 'type_2': 'TextEdit', 'oneway_2': 'Range', 'bridge_2': 'Range', 'tunnel_2': 'Range', 'maxspeed_2': 'Range', 'osm_id_6': 'TextEdit', 'name_7': 'TextEdit', 'type_3': 'TextEdit', 'oneway_3': 'Range', 'bridge_3': 'Range', 'tunnel_3': 'Range', 'maxspeed_3': 'Range', 'osm_id_2_6': 'TextEdit', 'name_2_5': 'TextEdit', 'type_2_3': 'TextEdit', 'oneway_2_2': 'Range', 'bridge_2_2': 'Range', 'tunnel_2_2': 'Range', 'maxspeed_1': 'Range', });
lyr_Macon_STL_Charnay_Sance_2.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'insee_2': 'TextEdit', 'nom_2': 'TextEdit', 'wikipedia_': 'TextEdit', 'surf_ha_2': 'TextEdit', 'insee_2_2': 'TextEdit', 'nom_2_2': 'TextEdit', 'wikipedi_1': 'TextEdit', 'surf_ha_2_': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_Saone_3.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'width': 'TextEdit', });
lyr_Routes_Tournees_0.set('fieldLabels', {'osm_id': 'no label', 'name': 'header label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'maxspeed': 'no label', 'osm_id_2': 'no label', 'name_2': 'header label', 'type_2': 'no label', 'oneway_2': 'no label', 'bridge_2': 'no label', 'tunnel_2': 'no label', 'maxspeed_2': 'no label', });
lyr_Union_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'osm_id_2': 'no label', 'name_2': 'no label', 'fid_2': 'no label', 'osm_id_3': 'no label', 'name_3': 'no label', 'osm_id_2_2': 'no label', 'name_2_2': 'no label', 'type_2_2': 'no label', 'osm_id_3_2': 'no label', 'name_3_2': 'no label', 'osm_id_2_1': 'no label', 'name_2_2_2': 'no label', 'type_2_2_2': 'no label', 'fid_2_2': 'no label', 'osm_id_4': 'no label', 'name_4': 'no label', 'type_4': 'no label', 'osm_id_2_3': 'no label', 'name_2_3': 'no label', 'osm_id_3_1': 'no label', 'name_3_2_2': 'no label', 'osm_id_2_4': 'no label', 'name_2_2_1': 'no label', 'fid_3': 'no label', 'osm_id_5': 'no label', 'name_5': 'no label', 'layer': 'no label', 'path': 'no label', 'Orange_fin': 'no label', 'Orange_f_1': 'no label', 'Orange_f_2': 'no label', 'Orange_f_3': 'no label', 'Orange_f_4': 'no label', 'Orange_f_5': 'no label', 'Orange_f_6': 'no label', 'Orange_f_7': 'no label', 'Orange_f_8': 'no label', 'Orange_f_9': 'no label', 'Orange_f10': 'no label', 'Orange_f11': 'no label', 'Orange_f12': 'no label', 'osm_id': 'no label', 'name_6': 'no label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'maxspeed': 'no label', 'osm_id_2_5': 'no label', 'name_2_4': 'no label', 'type_2': 'no label', 'oneway_2': 'no label', 'bridge_2': 'no label', 'tunnel_2': 'no label', 'maxspeed_2': 'no label', 'osm_id_6': 'no label', 'name_7': 'no label', 'type_3': 'no label', 'oneway_3': 'no label', 'bridge_3': 'no label', 'tunnel_3': 'no label', 'maxspeed_3': 'no label', 'osm_id_2_6': 'no label', 'name_2_5': 'no label', 'type_2_3': 'no label', 'oneway_2_2': 'no label', 'bridge_2_2': 'no label', 'tunnel_2_2': 'no label', 'maxspeed_1': 'no label', });
lyr_Macon_STL_Charnay_Sance_2.set('fieldLabels', {'insee': 'no label', 'nom': 'header label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'insee_2': 'no label', 'nom_2': 'header label', 'wikipedia_': 'no label', 'surf_ha_2': 'no label', 'insee_2_2': 'no label', 'nom_2_2': 'no label', 'wikipedi_1': 'no label', 'surf_ha_2_': 'no label', });
lyr_Saone_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'header label', 'type': 'no label', 'width': 'no label', });
lyr_Saone_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});