/**
 * Created by user on 2018/6/2.
 */
function byId(id){
    return typeof (id) === "string"?document.getElementById(id):id;
}
window.onload = function(){
    var liTab = byId("notice_tit").getElementsByTagName("li");
    var divTab = byId("notice_con").getElementsByTagName("div");
    if(liTab.length != divTab.length)
        return;
    for(var i = 0;i < liTab.length;i ++){
        liTab[i].id = i;
        liTab[i].onmouseover = function(){
            for(var j = 0;j < liTab.length;j ++){
                liTab[j].className = "";
                divTab[j].style.display = "none";
            }
            this.className = "select";
            divTab[this.id].style.display = "block";
        }

    }
};