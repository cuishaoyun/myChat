
exports.getTime = () =>{
    let now = new Date();
    let year = now.getFullYear(); //年
    let month = now.getMonth() +1; //月
    let date = now.getDate(); //日
    let day = now.getDay(); //周几
    let hour = now.getHours(); //时
    let minu = now.getMinutes(); //分
    let sec = now.getSeconds(); //秒
   
    month = month <10 ? '0'+month:month;
    date = date <10 ? '0'+date:date;
    hour = hour <10 ? '0'+hour:hour;
    minu = minu <10 ? '0'+minu:minu;
    sec = sec <10 ? '0'+sec:sec;

    let days = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
    day = days[day-1];

    let fullTime = year+'-'+month+'-'+date+' '+hour+':'+minu+':'+sec+' '+day;

    return fullTime;
}

module.exports = exports = {};