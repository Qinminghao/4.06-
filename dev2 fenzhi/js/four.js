$.get('http://192.168.0.104:3000/play/category', function (a) {

    for (var i = 0; i < 8; i++) {
        console.log(a);
        $('.tianjia').append(`
                <div class="sbig1">
                    <img src='${a.live[i].icon}' class="img">                    
                    <div class="last1">
                        <span>${a.live[i].productName}</span>
                        <span class="nums">${'(' + a.live[i].nums + ')'}</span>
                                          
                    </div>
                </div>
            `)
    }
    for (var i = 0; i < a.live.length; i++) {
        $('.sbottom').append(`
            <div>
                <span>${a.live[i].productName}</span>
                <span class="nums">${'(' + a.live[i].nums + ')'}
            </div>
            `)
    }
    for (var i = 4; i < a.smart_wear.length; i++) {
        console.log(a);
        $('.tianjia2').append(`
                <div class="sbig1">
                    <img src='${a.live[i].icon}' class="img">                    
                    <div class="last1">
                        <span>${a.live[i].productName}</span>
                        <span class="nums">${'(' + a.live[i].nums + ')'}</span>
                                          
                    </div>
                </div>
            `)
    }
    for (var i = 3; i < a.smart_wear.length; i++) {
        console.log(a);
        $('.tianjia3').append(`
                <div class="sbig1">
                    <img src='${a.live[i].icon}' class="img">                    
                    <div class="last1">
                        <span>${a.live[i].productName}</span>
                        <span class="nums">${'(' + a.live[i].nums + ')'}</span>
                                          
                    </div>
                </div>
            `)
    }
    for (var i = 0; i < a.trip.length - 8; i++) {
        console.log(a);
        $('.tianjia4').append(`
                <div class="sbig1">
                    <img src='${a.live[i].icon}' class="img">                    
                    <div class="last1">
                        <span>${a.live[i].productName}</span>
                        <span class="nums">${'(' + a.live[i].nums + ')'}</span>
                                          
                    </div>
                </div>
            `)
    }
    for (var i = 3; i < a.trip.length - 9; i++) {
        console.log(a);
        $('.tianjia5').append(`
                <div class="sbig1">
                    <img src='${a.live[i].icon}' class="img">                    
                    <div class="last1">
                        <span>${a.live[i].productName}</span>
                        <span class="nums">${'(' + a.live[i].nums + ')'}</span>
                                          
                    </div>
                </div>
            `)
    }
    for (var i = 5; i < a.trip.length - 8; i++) {
        console.log(a);
        $('.tianjia6').append(`
                <div class="sbig1">
                    <img src='${a.live[i].icon}' class="img">                    
                    <div class="last1">
                        <span>${a.live[i].productName}</span>
                        <span class="nums">${'(' + a.live[i].nums + ')'}</span>
                                          
                    </div>
                </div>
            `)
    }
})