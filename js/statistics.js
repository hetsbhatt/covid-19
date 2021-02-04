$(document).ready(function(){
            
    var dataPoints = [];

    var options =  {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Canada Statistics"
        },
        axisX: {
            valueFormatString: "YYYY-M-DD",
        },
        axisY: {
            title: "Cases",
            titleFontSize: 24,
            includeZero: false
        },
        data: [{
            type: "spline", 
            yValueFormatString: "$#,###",
            dataPoints: dataPoints
        }]
    };
       
    $.getJSON("js/canada.json", function(data){
        $.each(data, function(){
            $.each(this, function(key,value){
                dataPoints.push({x: new Date(value.date), y: value.confirmed});
            });
        });
        $("#graph").CanvasJSChart(options);
    });
    
    $.getJSON("js/countries.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#world").append(
                    "<tr><td>" + value.country + "</td>" + 
                    "<td>" + value.confirmed + "</td></tr>" 
                );
            });
        }); 
    });
    
    $.getJSON("js/states.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#states").append(
                    "<tr><td>" + value.state + "</td>" + 
                    "<td>" + value.confirmed + "</td></tr>" 
                );
            });
        }); 
    });
    
});