function formatTime(time, format) {
  let temp = '0000000000' + time
  let len = format.length
  if(time >= 100) {
    return temp.substr(-(len+1))
  } else{
    return temp.substr(-len)
  }
  
}

module.exports = {
  formatTime: formatTime
}