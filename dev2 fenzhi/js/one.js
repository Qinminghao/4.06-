// 倒计时
var timer = setInterval(function () {
    s--
    var t = new Date(2022, 05, 01)
    var ms = t.getTime() - new Date().getTime()
    var s = parseInt(ms / 1000)
    var ss = s % 60
    var min = parseInt(s / 60 % 60)
    var h = parseInt(s / 60 / 60 % 24)
    var day = parseInt(s / 60 / 60 / 24 % 30)
    jjia.innerHTML = '申请时间剩余：' + day + '天' + h + '小时' + min + '分钟' + ss + '秒'
    jjia.style.fontSize = '12px'
    if (s == 0) clearInterval(timer)
}, 1000)
//立即申请的点击事件
// var bntred = document.getElementsByClassName('bntred')[0]
// var sbu = document.getElementsByClassName('sbu')
// var sbu1 = 126
// var sbu2 = 20
// bntred.onclick = function () {
//     sbu1++
//     sbu2--
//     if (sbu2 <= 0) {
//         sbu2 = 0
//         alert('物品已经被抢完！')
//     }
//     sbu[0].innerHTML = sbu1 + '人申请'
//     sbu[2].innerHTML = sbu2 + '台'
// }


