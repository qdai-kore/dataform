// myDateUtils.js

// Function to get the start of the previous day
// if today is 2023-07-14 08:00:01 UTC time, then returns '2023-07-13 00:00:00.000 UTC'
function getStartOfPreviousMin(min) {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const previousDate = new Date(currentDate.getTime() - min * 60 * 1000);
  // Return the timestamp
  const formattedDate = previousDate.toISOString().replace('T', ' ').replace('Z', ' UTC');
  return formattedDate;
};

// Function to get the start of the previous day
// if today is 2023-07-14 08:00:01 UTC time, then returns '2023-07-13 00:00:00.000 UTC'
function getStartOfPreviousDay(numDays) {
  return getStartOfPreviousMin(numDays * 24 * 60);
};



module.exports = {
  getStartOfPreviousDay,getStartOfPreviousMin
};

