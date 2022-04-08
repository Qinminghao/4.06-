$.get('http://192.168.0.104:3000/useing/public', function (a) {
    for (var i = 0; i < a.length; i++) {
        console.log(a);
        $('.content').append(`
            <div class="jqdiv">
                <img src="${a[i].img}" class="jqimg">
                <h5>${a[i].text}</h5>
                <div class="tdiv">
                    ${a[i].apply}<span>申请</span>
                </div>
            </div>
         `)
        // 判定右上角
        if (a[i].info_ty == '体验师转享') {
            $('.jqdiv').eq(i).append(`            
                <div class="tright1">体验师专享</div >
            `)
        } else {
            $('.jqdiv').eq(i).append(`            
                <div class="tright2">首 发</div >
            `)
        }
        // 判定最后一行       
        // if (a[i].report) {
        //     $('.jqdiv').eq(i).append(`
        //         <div class="sdiv">
        //             <span class="jqleft jqleft1">${a[i].totalnum}</span>
        //             <span class="jqleft jqleft1">${a[i].num}台</span>
        //         </div>
        //         <div class="fdiv">报告数量：${a[i].report}</div>
        //     `)
        //     $('.fdiv').css('color', '#ccc')
        //     $('.jqleft1').css('color', '#ccc')
        //     $('.jqleft1').css('border', '2px solid #ccc')
        // } else 
        // if (a[i].endTime) {
        // 时间倒计时
        // console.log(endTime);
        var nowt = a[i].endTime
        console.log(nowt);

        var t = new Date(nowt)
        var ms = t.getTime() - new Date().getTime()
        var s = parseInt(ms / 1000)
        var day = parseInt(s / 60 / 60 / 24)
        $('.jqdiv').eq(i).append(`
                <div class="sdiv">
                    <span class="jqleft jqleft2">${a[i].totalnum}</span>
                    <span class="jqleft jqleft2">${a[i].num}台</span>
                </div>
                <div class="fdiv fdiv1">剩余时间${day}天</div>
            `)
        $('.fdiv1').css('color', 'red')
        $('.jqleft2').css('color', 'red')
        $('.jqleft2').css('border', '2px solid red')
        // }
        //  else {
        //     $('.jqdiv').eq(i).append(`
        //         <div class="sdiv">
        //             <span class="jqleft jqleft3">${a[i].totalnum}</span>
        //             <span class="jqleft jqleft3">${a[i].num}台</span>
        //         </div>
        //         <div class="fdiv fdiv3">查看试用名单</div>                
        //     `)
        //     $('.fdiv3').css('color', 'rgb(9, 235, 9)')
        //     $('.jqleft3').css('color', 'rgb(9, 235, 9)')
        //     $('.jqleft3').css('border', '2px solid rgb(9, 235, 9)')
        // }
        // $('.jqdiv').eq(i).css('display', 'none')
        // function ss() {
        //     $('.jqdiv').eq(i).css('display', 'block')
        // }
        // ss()
        // 点击事件
        function two1() {
            $('.jqdiv').eq(1).css('display', 'block')
            $('.jqdiv').eq(5).css('display', 'block')
            $('.jqdiv').eq(12).css('display', 'block')
            $('.jqdiv').eq(13).css('display', 'block')
        }
        function two3() {
            $('.jqdiv').eq(1).css('display', 'none')
            $('.jqdiv').eq(5).css('display', 'none')
            $('.jqdiv').eq(12).css('display', 'none')
            $('.jqdiv').eq(15).css('display', 'none')
        }
        function border(e) {
            $('.qing').css('border', '0px')
            $(e).css('borderBottom', '5px solid orangered')
            $(bnt).css('borderBottom', '5px solid orangered')
        }
        function border2(e) {
            $('.qing').css('border', '0px')
            $(e).css('borderBottom', '5px solid orangered')
            $(bnt2).css('borderBottom', '5px solid orangered')
        }

        $(bnt).click(function () {
            // alert('aaa')
            $('.sone2').css('display', 'none')
            $('.sone').css('display', 'block')
            $('.jqdiv').css('display', 'block')
            two3()
            border(bnt)
            $(bnt3).css('borderBottom', '5px solid orangered')
        })
        $(bnt2).click(function () {
            $('.sone').css('display', 'none')
            $('.sone2').css('display', 'block')
            $('.jqdiv').css('display', 'none')
            $('.jqdiv').css('display', 'block')

            two1()
            border2(bnt2)
            $(bnt7).css('borderBottom', '5px solid orangered')
        })

        $(bnt3).click(function () {
            $('.jqdiv').css('display', 'block')
            two3()
            border(bnt3)
        })
        $(bnt4).click(function () {
            // $('.jqdiv').css('display', 'block')
            two3()
            border(bnt4)
        })
        $(bnt5).click(function () {
            $('.jqdiv').css('display', 'block')
            two3()
            border(bnt5)
        })
        $(bnt6).click(function () {
            $('.jqdiv').css('display', 'none')
            two3()
            border(bnt6)
        })
        $(bnt7).click(function () {
            $('.jqdiv').css('display', 'block')
            two3()
            border2(bnt7)
        })
        $(bnt8).click(function () {
            $('.jqdiv').css('display', 'block')
            two3()
            border2(bnt8)
        })
        $(bnt9).click(function () {
            two3()
            border2(bnt9)
        })
        $(bnt10).click(function () {
            $('.jqdiv').css('display', 'block')
            two3()
            border2(bnt10)
        })
    }


})

