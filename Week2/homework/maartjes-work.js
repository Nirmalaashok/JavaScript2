'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

//function computeEarnings(tasks, hourlyRate) {
  // Replace this comment and the next line with your code
  
//  console.log(tasks, hourlyRate);
//}

function computeEarnings(tasks, hourlyRate){
const computeEarnings = (tasks, hourlyRate) => {
  const durationsInHours = maartjesTasks.map(task => task.duration / 60);
  const filteredHours = durationsInHours.filter(hour => hour >= 2);
  const totalEarnings = filteredHours.reduce((acc, cv) => acc + cv * hourlyRate, 0);
  return totalEarnings;
} };

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
//two decimal
console.log(`Maartje has earned: €${maartjesEarnings.toFixed(2)}`);


// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
