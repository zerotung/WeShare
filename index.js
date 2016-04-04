$(document).ready(function() {
    $("img.lazy").lazyload();
    var oUl = $('#type>ul');
    var oLis = $('#type>ul>li');
    var oDivs = $('#type>div');
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
    var objType = $('.objType'); //选取所有类型
    var name = new Array(); //用于保存不同类型的id
    for (var i = 0; i < objType.length; i++) {
        objType[i].index = i;
        name[i] = objType.eq(i).attr('id'); //选择第i个类型获取id保存到name[]
    }
    // alert(name);
    objType.click(function() {
        // alert(location.href + 'items?type=' + name[this.index]);
        location = 'items/show.html?type=' + name[this.index];
    })
})
