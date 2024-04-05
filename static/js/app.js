//  Get the samples endpoint
const url = 'https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json';

// Create init function that will populate the dropdown, bar chart, and bubble chart with each sample's dataset
function init() {

    // Using D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        // An array of id names
        let names = data.names;

        // Iterate through the names Array
        names.forEach((name) => {
            // Append each name as an option to the drop down menu
            // This will be adding each name to the html file as an option element with value = a name in the names array
            dropdownMenu.append("option").text(name).property("value", name);
        });

        // Assign the first name to name variable
        let name = names[0];

        // Call the functions to make the demographic panel, bar chart, and bubble chart
        demo(name);
        bar(name);
        bubble(name);
        gauge(name);
       
    });
}

// Create the demographics panel 

function demo(selectedValue) {
    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        // An array of metadata objects
        let metadata = data.metadata;

        // Filter the data
        // (bc meta.id is in integer format and selectValue from is in string format)
        let filteredData = metadata.filter((meta) => meta.id == selectedValue);

        // Assign the first object to obj variable
        let obj = filteredData[0]

        // Clear the child elements in div with id sample-metadata
        d3.select("#sample-metadata").html("");

        // Object.entries() is a built-in method in JavaScript
        let entries = Object.entries(obj);

        // Iterate through the entries array
        entries.forEach(([key,value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });

        console.log(entries);
    });
  }


// Create a function to populate the horizontal bar chart graph
function bar(selectedValue) {
    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        // An array of sample objects
        let samples = data.samples;

        // Filter the data 
        let filteredData = samples.filter((sample) => sample.id === selectedValue);

        // Create the first object to obj variable
        let obj = filteredData[0];

        // Create the trace for bar chart
        let trace = [{
            // Display the first 10 results in the bar chart
            x: obj.sample_values.slice(0,10).reverse(),
            y: obj.otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
            text: obj.otu_labels.slice(0,10).reverse(),
            type: "bar",
            marker: {
                color: "purple"
            },
            orientation: "h"
        }];

        // Use Plotly to plot the data in a bar chart
        Plotly.newPlot("bar", trace);
    });
}

// Create the bubble chart
function bubble(selectedValue) {
    // Fetch the JSON data and console log it

    d3.json(url).then((data) => {

        // An array of sample objects
        let samples = data.samples;

        // Filter the data 
        let filteredData = samples.filter((sample) => sample.id === selectedValue);

        // Create the first object to obj variable
        let obj = filteredData[0];

        // Create the trace for bubble chart
        let trace = [{
            x: obj.otu_ids,
            y: obj.sample_values,
            text: obj.otu_labels,
            mode: "markers",
            marker: {
                size: obj.sample_values,
                color: obj.otu_ids,
                colorscale: 'Earth'
            }
        }];

        // Apply the x-axis lengend to the layout
        let layout = {
            xaxis: {title: "OTU ID"}
        };

        // Use Plotly to plot the data in a bubble chart
        Plotly.newPlot("bubble", trace, layout);
    });
}

// Define the function when the dropdown detects a change
function optionChanged(selectedValue) {
    demo(selectedValue);
    bar(selectedValue);
    bubble(selectedValue);
    gauge(selectedValue)
    
}

// Initialize the Dashboard
init();
