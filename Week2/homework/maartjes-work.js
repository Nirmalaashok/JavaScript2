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

const convertToHours = task => task.duration / 60;
const filterTasksWith2Hours = hour => hour >= 2;

function computeEarnings(tasks, hourlyRate) {
  return tasks
    .map(convertToHours)
    .filter(filterTasksWith2Hours)
    .reduce((acc, cv) => acc + cv * hourlyRate, 0);
}
// eslint-disable-next-line no-unused-vars
const maartjesearnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

console.log(`Maartje has earned: €{maartjesearnings.toFixed(2)}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
