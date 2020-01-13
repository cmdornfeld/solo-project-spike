## Solo Project Spike - Bar/Line Graphs

## Get started

Run the following script to install the required library:
### `npm install --save react-chartjs-2 chart.js`

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits

## Adding a graph
-   Begin by importing the desired type(s) of graphs by importing them as follows:
    `import {Bar, Line} from 'react-chartjs-2'`

-   Render your graph type and pass in your properties (example: data, width, height, id, options, etc):
    `<Bar data={barData} />`
    - barData can be properties and values of your choosing (example: labels, datasets => labels, data, colors, etc)

-   Change your data points and watch the graph update





