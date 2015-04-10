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

var map = new ol.Map({
    target: $('#olMap')[0],
    layers: [
    new ol.layer.Tile({
        source: new ol.source.TileJSON({
            url: 'http://api.tiles.mapbox.com/v3/mapbox.geography-class.jsonp'
        })
    }),
    vectorLayer //When the vector layer is used both the features displays correctly.
    //imageLayer //When the image layer is in use only the point feature is displayed.
    ],
    view: new ol.View({
        center: [2952104.019976033, -3277504.823700756],
        zoom: 4
    })
});
