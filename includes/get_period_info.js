module.exports = (target_period_offset) => {
  //current UTC time
  const target_date = new Date();
  target_date.setUTCMonth(target_date.getUTCMonth() + target_period_offset);

  const year = target_date.getFullYear();
  //0-11, 0 = Dec
  const month = target_date.getMonth();
  
  // Get the period start date (24th of the month)
  const periodStartDate = new Date(year, month, 24);
  
  // If the target date is before the period start date,
  // set it to the previous month's 24th day
  if (target_date < periodStartDate) {
    periodStartDate.setMonth(periodStartDate.getMonth() - 1);
  }
  
  // Get the period end date (24th of the following month)
  const periodEndDate = new Date(periodStartDate.getFullYear(), periodStartDate.getMonth() + 1, 24);
  
  // Format the dates as 'yyyyMMdd' strings
  const periodStartDateStr = periodStartDate.toISOString().slice(0, 10).replace(/-/g, '');
  const periodEndDateStr = periodEndDate.toISOString().slice(0, 10).replace(/-/g, '');
  
  const period_key = `${periodStartDateStr}-${periodEndDateStr}`;

  return {
    period_key:period_key,
    period_start_date: periodStartDate.toISOString(),
    period_end_date: periodEndDate.toISOString()
  };
}

