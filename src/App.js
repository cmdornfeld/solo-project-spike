import React from 'react';
import {Bar, Line} from 'react-chartjs-2';
import './App.css';

const barData = {
  labels: ["Round 1", "Round 2", "Round 3", "Round 4", "Round 5", "Round 6", "Round 7"],
  datasets: [
    {
      label: 'My First Bar Graph in React',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [72, 75, 75, 73, 77, 76, 75]
    }
  ]
};

const lineData = {
  labels: ["Round 8", "Round 9", "Round 10", "Round 11", "Round 12", "Round 13", "Round 14"],
  datasets: [
    {
      label: 'My First Line Graph in React',
      fill: false,
      borderColor: 'green',
      data: [73, 76, 77, 72, 75, 74, 77]
    }
  ]
}

function App() {
  return (
    <div className="App">
      <h3>Bar graph example</h3>
      <Bar data={barData}
      // can add specific width and height
      // if using specific dimensions, must use maintainAspectRatio option, and set to false
      // width={400} height={200} options={{ maintainAspectRatio: false }}
      />
      <Line data={lineData}/>
    </div>
  );
}

export default App;
