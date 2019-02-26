const bgPlugin = {
    id: 'chartback',
    beforeDraw: function(chart, steps, options) {
        const ctx = chart.ctx;
        if(options.backgroundColor) {
            ctx.fillStyle = options.backgroundColor;
            ctx.fillRect(0, 0, chart.width, chart.height);
        }
        if(options.backgroundImage) {
            const image = new Image(chart.width, chart.height);
            image.src = options.backgroundImage;
            ctx.drawImage(image, 0,0,chart.width, chart.height);
        }
    }
}

Chart.plugins.register(bgPlugin);