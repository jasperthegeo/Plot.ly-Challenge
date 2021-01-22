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
        //console.log(sampleData);

        //Call the graph functions that I have created
        // metaDataShow(idNum);
        // barChartGraph(idNum);
        // bubblePlot(idNum);
    });
};

function barChartGraph (filterSelected) {

    //we have the ingest the data each time for every graph
    d3.json("static/js/samples.json").then((sampleData) => {
        var samples = sampleData.samples;
        var filterData = samples.filter(object => object.id == filterSelected)[0];

        //let's check this with another console.log
        //console.log(filterData);

        //Filter for only the first 10 samples, remember that in JS
        //the last digit in the filter is excluded, create variables for the labels
        //of the horizontal bar chart
        var valuesInverse = filterData.sample_values.slice(0,10).reverse();
        var otuID = filterData.otu_ids.slice(0,10).reverse();
        var stringIDs = otuID.map(row => "OTU" + row.toString());
        var labelsInverse = filterSelected.otu_labels.slice(0,10).reverse();

        //for plotly to ingest the horizontal bar chart, you need to create
        // variables for it, with a specified formatting. 
        var data0 = [{
            x: valuesInverse,
            y: stringIDs,
            text: labelsInverse,
            name: filterSelected,
            type: "bar",
            orientation:"h"
        }];

        var layout0 = {
            barmode: "group",
            hovermode: "closest"
        };

        //we are going to call out those 2 bar chart variables within a Plot.ly function
        Plotly.newPlot("bar", data0, layout0);

    });
};

// Bubble plot function 
function bubblePlot (filterSelected){
// ingest the data as with the other plots
    d3.json("static/js/samples.json").then((sampleData) =>
}




//This is the function that changes the graphs based on the value
//selected in the drop down menu, it calls the other functions to 
//create their respective graphs. 
 function optionChanged(idNum) {
    barChartGraph(idNum);
    // bubblePlot(idNum);
    // metaDataShow(idNum);
};



allTheGraphs();