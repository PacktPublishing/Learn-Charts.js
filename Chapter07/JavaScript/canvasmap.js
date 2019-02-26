/**
 * Simple script to draw a GeoJSON map in Canvas.
 */

const map = {};

map.setCanvas = function(canvas) {
    map.canvas = canvas;
}

map.scaleX = coord => map.canvas.width * (180 + coord) / 360;
map.scaleY = coord => map.canvas.height * (90 - coord) / 180;

map.drawPolygon = function(coords) {
    const ctx = map.canvas.getContext("2d");
    ctx.beginPath();
    for(let i = 0; i < coords.length; i++ ) {
        const latitude = coords[i][1];
        const longitude = coords[i][0];
        if(i == 0) {
            ctx.moveTo(map.scaleX(longitude), map.scaleY(latitude));
        } else {
            ctx.lineTo(map.scaleX(longitude), map.scaleY(latitude));
        }
    }
    ctx.stroke();
    ctx.fill();
}

map.drawMap = function(data) {
    data.forEach(obj => {
        if(obj.geometry.type == 'MultiPolygon') {
        obj.geometry.coordinates.forEach(poly => map.drawPolygon(poly[0]));

        } else if(obj.geometry.type == 'Polygon') {
            obj.geometry.coordinates.forEach(poly => map.drawPolygon(poly));
        }
    });
}