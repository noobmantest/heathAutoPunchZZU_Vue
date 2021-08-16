function toYYMMDD(time) {
  let year = new Date(parseInt(time)).getFullYear()
  let month = new Date(parseInt(time)).getMonth()
  let date = new Date(parseInt(time)).getDate()
  let res = year + '-' + month + '-' + date
  return res
}

function toHHMMSS(time) {
  let hour = new Date(parseInt(time)).getHours()
  let minute = new Date(parseInt(time)).getMinutes()
  let second = new Date(parseInt(time)).getSeconds()
  let res = hour + ':' + minute + ':' + second
  return res
}


function getDuration(my_time) {
  var days = my_time / 1000 / 60 / 60 / 24;
  var daysRound = Math.floor(days);
  var hours = my_time / 1000 / 60 / 60 - (24 * daysRound);
  var hoursRound = Math.floor(hours);
  var minutes = my_time / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
  var minutesRound = Math.floor(minutes);
  var seconds = my_time / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
  // console.log('转换时间:', daysRound + '天', hoursRound + '时', minutesRound + '分', seconds + '秒');
  let res = daysRound + '天' + hoursRound + '时' + minutesRound + '分'
  // var time = hoursRound + ':' + minutesRound + ':' + seconds
  return res;
}
export default {
  toYYMMDD,
  toHHMMSS,
  getDuration
}
