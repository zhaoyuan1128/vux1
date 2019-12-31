function isLeapYear (year) {
  return year % 100 !== 0 && year % 4 === 0 || year % 400 === 0
}

function getMaxDay (year, month) {
  year = parseFloat(year)
  month = parseFloat(month)
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28
  }
  return [4, 6, 9, 11].indexOf(month) >= 0 ? 30 : 31
}

function getYears (startDate, endDate) {
  let startYear = startDate.getFullYear()
  const endYear = endDate.getFullYear()
  let rs = []
  while (startYear <= endYear) {
    rs.push(startYear)
    startYear++
  }
  return {
    minYear: rs[0],
    maxYear: rs[rs.length - 1]
  }
}

function getMonths (startDate, endDate, year) {
  const startYear = startDate.getFullYear()
  const endYear = endDate.getFullYear()
  const startMonth = startDate.getMonth() + 1
  const endMonth = endDate.getMonth() + 1
  let start = 1
  let end = 12
  if (year === startYear) {
    start = startMonth
  }
  if (year === endYear) {
    end = endMonth
  }
  return {
    minMonth: start,
    maxMonth: end
  }
}

function getDays (startDate, endDate, year, month) {
  const startYear = startDate.getFullYear()
  const endYear = endDate.getFullYear()
  const startMonth = startDate.getMonth() + 1
  const endMonth = endDate.getMonth() + 1
  const startDay = startDate.getDate()
  const endDay = endDate.getDate()

  let start = 1
  let end = getMaxDay(year, month)

  if (year === startYear && month === startMonth) {
    start = startDay
  }
  if (year === endYear && month === endMonth) {
    end = endDay
  }
  return {
    minDay: start,
    maxDay: end
  }
}

function getHours(startDate, endDate, year, month, day) {
  const startYear = startDate.getFullYear()
  const endYear = endDate.getFullYear()
  const startMonth = startDate.getMonth() + 1
  const endMonth = endDate.getMonth() + 1
  const startDay = startDate.getDate()
  const endDay = endDate.getDate()
  const startHour = startDate.getHours()
  const endHour = endDate.getHours()
  let start = 1
  let end = 59
  if(year === startYear && month === startMonth && day === startDay) {
    start = startHour
  }
  if(year === endYear && month === endMonth && day === endDay){
    end = endHour
  }
  return {
    minHour: start,
    maxHour: end
  }
}

function getMinute(startDate, endDate, year, month, day, hour){
  const startYear = startDate.getFullYear()
  const endYear = endDate.getFullYear()
  const startMonth = startDate.getMonth() + 1
  const endMonth = endDate.getMonth() + 1
  const startDay = startDate.getDate()
  const endDay = endDate.getDate()
  const startHour = startDate.getHours()
  const endHour = endDate.getHours()
  const startMinute= startDate.getMinutes()
  const endMinute = endDate.getMinutes()
  let start = 1
  let end = 59
  if(year === startYear && month === startMonth && day === startDay && hour === startHour) {
    start = startMinute
  }
  if(year === endYear && month === endMonth && day === endDay && hour === endHour){
    end = endMinute
  }
  return {
    minMinute: start,
    maxMinute: end
  }
}
export {
  getYears,
  getMonths,
  getDays,
  getHours,
  getMinute
}
