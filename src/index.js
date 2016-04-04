$(document).ready(function() {
	$("img.lazy").lazyload();
    oUl = $('#type>ul');
    oLis = $('#type>ul>li');
    oDivs = $('#type>div');
    for (var i = 0, len = oLis.length; i < len; i++) {
        oLis[i].index = i;
        oLis[i].onclick = function() {
            for (var n = 0; n < len; n++) {
                oLis[n].className = "";
                oDivs[n].className = "hide";
            }
            this.className = "on";
            oDivs[0].className = "";
            oDivs[this.index + 1].className = "";
        }
    }

    $('#submitShareInfo').click(function() {
        alert('iShare提交成功');
    })
    $('#submitWantInfo').click(function() {
        alert('iWant提交成功');
    })
    objType = $('.objType');
    for (var i = 0; i < objType.length; i++) {
    	objType[i].index = i;
    	objType[i].onclick = function(){
    		alert(this.index);
    	}
    }
})
