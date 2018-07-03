/**
 * Created by user on 2018/6/2.
 */
function byId(id){
    return typeof (id) === "string"?document.getElementById(id):id;
}
window.onload = tab;
function tab() {
    var index = 0;
    var timer = null;
    var lis = byId("notice_tit").getElementsByTagName("li");
    var divs = byId("notice_con").getElementsByTagName("div");
    for (var j = 0; j < lis.length; j++) {
        lis[j].id = j;
        lis[j].onmouseover = function () {
            clearInterval(timer);
            changeOption(this.id);
        };
        lis[j].onmouseout = function () {
            timer = setInterval(autoPlay, 2000);
        }
    }
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    timer = setInterval(autoPlay, 2000);

    function autoPlay() {
        index++;
        if (index >= lis.length) {
            index = 0;
        }
        changeOption(index);
    }

    function changeOption(para) {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
            divs[i].style.display = "none";
        }
        lis[para].className = "select";
        divs[para].style.display = "block";
        index = para;

    }
}
