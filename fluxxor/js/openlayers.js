//Holds the Polygon feature
var polyFeature = new ol.Feature({
    geometry: new ol.geom.Polygon([
        [
            [10, -25],
            [35, -25],
            [35, -35],
            [10, -35],
            [10, -25]
        ]
    ])
});
polyFeature.getGeometry().transform('EPSG:4326', 'EPSG:3857');

//Holds the Point feature
var pointFeature = new ol.Feature({
    geometry: new ol.geom.Point(
    [28.048095703125, -26.015625])
});
pointFeature.getGeometry().transform('EPSG:4326', 'EPSG:3857');

//A vector layer to hold the features
var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
        polyFeature,
        pointFeature]
    })
});

//A Image layer to hold the features
var imageLayer = new ol.layer.Image({
    source: new ol.source.ImageVector({
        source: new ol.source.Vector({
            features: [
            polyFeature,
            pointFeature]
        })
    })
});
