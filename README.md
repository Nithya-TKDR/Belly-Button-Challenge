# Belly-Button-Challenge
---
**Brief Description**: This challenge comprises of two separate tasks: 1) App.js which is a main file and 2) Bonus.js which has a gauge chart.
This project embarks on an interactive exploration of microbial data from various individuals, leveraging the D3.js library to parse and visualize information from a comprehensive JSON dataset. At its core, the initiative aims to unveil the top Operational Taxonomic Units (OTUs) present in individuals, employing a variety of dynamic visualizations such as horizontal bar charts and bubble charts to represent the data's complexity and richness. Through an intuitive interface featuring dropdown menus and responsive charts, users can navigate through the dataset to uncover insights into the microbial communities within each sample. The visualization effort extends to displaying demographic metadata, enriching the context of each dataset explored. 

**Inputs**: The challenge takes in as input a JSON file that has samples. Use the D3 library to read in samples.json from the URL<br>
https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json


**Outputs**: The challenge provides the following outputs for each of the different activities.
> - *Part 1: Horizontal Bar Chart: Displays the top 10 OTUs found in the individual selected from the dropdown menu.
Values: sample_values
Labels: otu_ids
Hovertext: otu_labels
> - *Part 2: Bubble Chart: Displays each sample.
X values: otu_ids
Y values: sample_values
Marker size: sample_values
Text values: otu_labels
> - *Part 3: Demographic Information Panel: Shows the selected individual's demographic information as key-value pairs.
> - *Part 4: Gauge Chart: Plots the weekly washing frequency of the individual.


**References**:
> - https://plotly.com/javascript/gauge-charts/
> - https://stackoverflow.com/questions/35510128/d3-js-color-function-each-gauge-section
---

 
