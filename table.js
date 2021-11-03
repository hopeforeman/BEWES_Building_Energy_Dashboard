window.onload = function () {

  var data = getData();
}

//Get the data from the geojson file
async function getData(){

  //Fetch the data from the geojson file
  fetch("BEWES_Building_Data.geojson").then(response => response.json()).then(data => {addToTable(data);});

  }

//Adds the data to the data cells in the table
function addToTable(data){

  //Get the total number of properties
  var count = Object.keys(data.features).length;
  console.log(count);

  //Holds the last child element
   var last_child;

   //Find the table
   var table = document.querySelector("table");

  //Loop through the data and parse it to the table
  for(var i = 0; i < count; i++)
  {

      var html=   '<tr>'+
                      '<td>' + data.features[i].properties.year + '</td>'+
                      '<td>' + data.features[i].properties.property_n + '</td>'+
                      '<td>' + data.features[i].properties.property_a + '</td>'+
                      '<td>' + data.features[i].properties.primary_us + '</td>'+
                      '<td>' + data.features[i].properties.energy_sta + '</td>'+
                      '<td>' + data.features[i].properties.compliance + '</td>'+
                      '<td>' + data.features[i].properties.site_energ + '</td>'+
                      '<td>' + data.features[i].properties.building_s + '</td>'+
                      '<td>' + data.features[i].properties.lat + '</td>'+
                      '<td>' + data.features[i].properties.long + '</td>'+
                      '<td>' + data.features[i].properties.total_annu + '</td>'+
                      '<td>' + data.features[i].properties.parcel + '</td>'+
                      '<td>' + data.features[i].properties.building_i + '</td>'+
                      '<td>' + data.features[i].properties.ayb + '</td>'+
                      '<td>' + data.features[i].properties.weather_no + '</td>'+
                  '</tr>';

                  //Find the last child element in the table
                  last_child = table.lastElementChild;

                  //Add new elements to the table
                  last_child.insertAdjacentHTML('afterend', html);

  }
}