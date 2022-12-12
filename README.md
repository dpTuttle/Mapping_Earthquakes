# Mapping_Earthquakes


The purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days. To complete this project, we used a URL for GeoJSON earthquake data from the USGS website to retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. Then added the data to a map. The final map includeed three map versions (Streets, Satellite and Dark) and three data layers. Layer 1 showed all earthquakes around the world for the last seven days plotted by magnitude with a color legend; Layer 2 showed the tectonic plate boundaries; and Layer 3 showed the most severe earthquakes with magnitudes greater than 5+. 

##### Tools:
The approach was to use the JavaScript and D3.js libraries to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data. We used the Leaflet library to plot the data on a Mapbox map through an API request and created interactivity for the earthquake data.

**See Screenshots of Results Below:**

-Final Compile View:

![Final_View](https://github.com/dpTuttle/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/Final_View.png)

-Final View with Layers:

![Final_View_Layers](https://github.com/dpTuttle/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/Final_View_Layers.png)

-Earthquake Layer:

![EQ_Layer](https://github.com/dpTuttle/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/EQ_Layer.png)

-Tectonic Plate Layer:

![TP_Layer](https://github.com/dpTuttle/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/TP_Layer.png)

-Major Earthquake Layer:

![MEQ_Layer](https://github.com/dpTuttle/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/MEQ_Layer.png)

