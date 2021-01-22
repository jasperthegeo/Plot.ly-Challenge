//please be advised that because of my cognitive disabilities, 
//I will be writing a lot of comments so as force myself to learn
//by wrote


//I am initialising a drop-down function menu, 
function init() {
    var dropdown = d3.select("#selDataset");

    d3.json("samples.json").then((sampleData) => {
        sampleData.names.forEach(sample) => {
            dropdown.append("option").text(sample).property("value", sample);
        }
    }
}