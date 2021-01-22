//please be advised that because of my cognitive disabilities, 
//I will be writing a lot of comments so as force myself to learn
//by wrote


//I am initialising a drop-down function menu, 

function allTheGraphs() {
    var dropdown = d3.select("#selDataset");

//D3 is reading the samples json file
    d3.json("static/js/samples.json").then((sampleData) => {
        
        //Using the forEach method, the dropdown is now being populated with a number
        sampleData.names.forEach((sample) => {
            dropdown.append("option").text(sample).property("value", sample);
        });

        var idNum = dropdown.property("value");

        //use console.log to see the progress
        
        console.log(sampleData);
        // metaDataShow(idNum);
        // barChartGraph(idNum);
        // bubblePlot(idNum);
    });
};

// function optionChanged(idNum) {

// }


allTheGraphs();