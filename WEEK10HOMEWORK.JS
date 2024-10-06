// Embed the map
var vg_1 = "WEEK8HOMEWORK.JSON";
vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance for the map
}).catch(console.error);

// Embed the bar chart
var vg_2 = "WEEK10HOMEWORK.JSON";
    

vegaEmbed("#barchart", vg_2).then(function(result) {
    // Access the Vega view instance for the bar chart
}).catch(console.error);
