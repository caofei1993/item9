// JavaScript Document

window.onload =function(){
    var oLi = document.getElementById("oLi");
    var oP = oLi.getElementsByTagName("p");
    var oLi1 = document.getElementById("oLi1");
    var oDiv = oLi1.getElementsByTagName("div");


    for(var i = 0;i < oP.length;i++){
        oP[i].index = i;
        oP[i].onclick = function(){
            for(var j = 0;j < oP.length;j++){
                oP[j].className = "";
                oDiv[j].className = "";
            };

            this.className = "active";
            oDiv[this.index].className = "on";
        }

    }

}



