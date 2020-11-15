var dateArr = [];

//2.1
var today = new Date(Date.now());
dateArr.push(today);
console.log(dateArr);

//2.2
var oldDate = new Date(2018, 11, 8);
oldDate.setHours(21,0,0);
dateArr.push(oldDate);
console.log(dateArr);

//2.3
var count = dateArr.map(date => [new Date(date.getUTCFullYear(), date.getUTCMonth() + 1, 0).getDate(), date.getDay()]);
console.log(count); 

//2.4
const mapDays = (day) => ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'][day]

var format = (date, x) => {
  return "Дата: " + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() +
    ", час: " + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() +
    ", " + mapDays(count[x][1]) + ', ' + count[x][0] + " дни"
}
var mergerOfDates = dateArr.map((date, n) => format(date, n));
console.log(mergerOfDates);