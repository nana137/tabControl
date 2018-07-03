/**
 * Created by user on 2018/6/2.
 */
function byId(id){
    return typeof (id) === "string" ? document.getElementById(id):id;
}
window.onload = function(){
    var timer = null;
    var index = 0;
    var lis = byId("notice_tit").getElementsByTagName("li");
    var divs = byId("notice_con").getElementsByTagName("div");
    if(lis.length != divs.length)
        return;
    for(var i = 0;i < lis.length;i ++){
        lis[i].id = i;
        lis[i].onmouseover = function(){
            var that = this;       //因为interval是window对象里的，要用lis[i]只能在这里定义
            if(timer){
                clearTimeout(timer);
                timer = null;
            }
            timer = setTimeout(function(){
                for(var j = 0;j < lis.length;j ++){
                    lis[j].className = "";
                    divs[j].style.display = "none";
                }
                lis[that.id].className = "select";
                divs[that.id].style.display = "block";
            },500);
        };
    }
};
