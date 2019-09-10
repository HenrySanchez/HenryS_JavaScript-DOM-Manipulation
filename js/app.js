// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;

// Get a reference to the table body from the html page
var tbody = d3.select("tbody");


// CREATE TABLE using data.js file


data.forEach((sighting) => {

    var row = tbody.append("tr");

    Object.entries(sighting).forEach(([key, value]) => {
        
        var cell = tbody.append("td");

        cell.text(value);
    });
});


var button = d3.select("#filter-btn");

button.on("click", function() {

    d3.event.preventDefault();

    tbody.html("");

    
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
    
    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
    
    var tbodyfiltered = d3.select("tbody");

    filteredData.forEach((sightingsByDate) => {

        var rowByDate = tbodyfiltered.append("tr");

        Object.entries(sightingsByDate).forEach(([key, value]) => {
            
            var cellByDate = tbodyByDate.append("td");
            
            cellByDate.text(value);
        });
     });
});