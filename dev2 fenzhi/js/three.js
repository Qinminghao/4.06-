$.get('http://192.168.0.104:3000/play/new', function (a) {
    for (var i = 0; i < a.length - 2; i++) {
        for (var j = 0; j < a[i].length; j++) {
            // 酷玩----最新
            $('.content').append(`
                <div class="sbig">
                    <img src='${a[i][j].img}' class="img">
                    <h5>${a[i][j].text}</h5>
                    <div class="last">
                        <span class="price">${a[i][j].price}</span>
                        <span class="rights">
                            <span class="fa fa-heart-o">${a[i][j].like}</span>
                            <span class="fa fa-comment-o">${a[i][j].words}</span>
                        </span>                    
                    </div>
                </div>
            `)
            //  隐藏页面----加载
            $('.hidden').append(`
                <div class="sbig">
                    <img src='${a[i][j].img}' class="img">
                    <h5>${a[i][j].text}</h5>
                    <div class="last">
                        <span class="price">${a[i][j].price}</span>
                        <span class="rights">
                            <span class="fa fa-heart-o">${a[i][j].like}</span>
                            <span class="fa fa-comment-o">${a[i][j].words}</span>
                        </span>                    
                    </div>
                </div>
            `)
        }
    }
})
var jiazai = document.getElementsByClassName('jiazai')[0]
var hidden = document.getElementsByClassName('hidden')[0]
// console.log(hidden);
var timer = null
jiazai.onclick = function () {
    sas1.className = 'fa fa-spinner'
    timer = setInterval(function () {
        hidden.style.display = 'block'
        if (hidden.style.display = 'block') jiazai.style.display = 'none'
    }, 2000)

}
// 酷玩----最热
$.get('http://192.168.0.104:3000/play/hot', function (a) {
    for (var i = 2; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            // console.log(a[i]);
            $('.content2').append(`
                <div class="sbig">
                    <img src='${a[i][j].img}' class="img">
                    <h5>${a[i][j].text}</h5>
                    <div class="last">
                        <span class="price">${a[i][j].price}</span>
                        <span class="rights">
                            <span class="fa fa-heart-o">${a[i][j].like}</span>
                            <span class="fa fa-comment-o">${a[i][j].words}</span>
                        </span>                    
                    </div>
                </div>
            `)
        }
    }
})
$('.content2').css('display', 'block')