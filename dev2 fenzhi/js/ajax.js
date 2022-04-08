function oajax(url, id, dom) {
    var oajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    oajax.open('get', url, true);
    oajax.send();
    oajax.onreadystatechange = function () {
        if (oajax.readyState === 4 && oajax.status === 200) {
            var res = JSON.parse(oajax.responseText)
            render(res)
        }
    }

function render(res) {
    console.log(res);
    var htl = template(id, {
        value: res
    })
    document.getElementsByClassName(dom)[0].innerHTML = htl;
}
}