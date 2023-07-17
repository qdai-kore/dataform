module.exports = (date1) => {
  return `
  CONCAT(
    FORMAT_DATE('%Y%m%d',
      IF(EXTRACT(DAY FROM date) >= 24,
         DATE_TRUNC(date, MONTH),
         DATE_TRUNC(DATE_ADD(date, INTERVAL -1 MONTH), MONTH)
      )
    ),
    '-',
    FORMAT_DATE('%Y%m%d',
      DATE_ADD(
        IF(EXTRACT(DAY FROM date) >= 24,
           DATE_TRUNC(date, MONTH),
           DATE_TRUNC(DATE_ADD(date, INTERVAL -1 MONTH), MONTH)
        ),
        INTERVAL 1 MONTH
      )
    )
  )`;
}
