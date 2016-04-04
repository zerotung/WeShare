$(document).ready(function() {

    var oLi = $('li');
    oLi.eq(0).click(function() {
        location = '../';
    })

    oLi.eq(1).click(function() { //点击【其他分类】后展开分类列表
        var typeInfo = $('#typeInfo');
        if (typeInfo.css('display') == 'none') {
            typeInfo.show();
        } else {
            typeInfo.hide();
        }
    })

    var url = location.href;
    var type = url.split('?type=')[1]; //获取type值
    var name = new Array('ElectronicItems', '电子产品',
        'DailyUseItems', '生活用品', 'StudyItems', '学习用品',
        'SportItems', '体育用品', 'ClothesItems', '服装配饰',
        'AccountShareItems', '账号共享', 'OtherItems', '其他');

    //动态生成分类
    $('#typeInfo').append('<ul></ul>');
    for (var i = 0; i < name.length / 2; i++) {
        if (name[i * 2] != type) {
            $('#typeInfo>ul').append('<li style="width: 32%">' + name[i * 2 + 1] + '</li>')
        }
    }
    $('#typeInfo>ul').append('<div style="clear: both;"></div>');

    //标题栏显示类型
    for (var i = 0; i < name.length; i++) {
        if (name[i] == type) {
            $('#typeTitle').text(name[i + 1]);
            break;
        }
    }
    var resultType = new Array;
    var typeLi = $('#typeInfo>ul>li');
    for (var i = 0; i < typeLi.length; i++) {
        typeLi[i].index = i;
        thisType = typeLi.eq(i).html();
        // alert(thisType);
        for (var j = 0; j < name.length; j++) {
            if (thisType == name[j]) {
                resultType[i] = name[j - 1];
            }
        }
        typeLi.click(function() {
            // alert(this.index);
            location = 'show.html?type=' + resultType[this.index];
        })
    }

    var item = $('.item');
    item.css('display', 'none');
    if (type == 'ElectronicItems') {
        $('.ElectronicItems').css('display', '');
    } else if (type == 'DailyUseItems') {
        $('.DailyUseItems').css('display', '');
    } else if (type == 'StudyItems') {
        $('.StudyItems').css('display', '');
    } else if (type == 'SportItems') {
        $('.SportItems').css('display', '');
    } else if (type == 'ClothesItems') {
        $('.ClothesItems').css('display', '');
    } else if (type == 'AccountShareItems') {
        $('.AccountShareItems').css('display', '');
    } else if (type == 'OtherItems') {
        $('.OtherItems').css('display', '');
    } else {

    }

    item.click(function() {
        // $(this).css('width', '90%');
        if ($(this).find('.detail').css('display') == 'none') {
            $(this).css('width', '50%');
            $(this).animate({ width: '90%' });
            item.find('.detail').hide();
            item.find('.address').hide();
            item.find('.message').hide();
            $(this).find('.detail').fadeIn(1000);
            $(this).find('.address').fadeIn(1000);
            $(this).find('.message').fadeIn(1000);
            item.css('width', '40%');

        } else {
            $(this).animate({ width: '40%' });
            $(this).find('.detail').hide();
            $(this).find('.address').hide();
            $(this).find('.message').hide();
        }
    })

    // var detail = $('.item>.detail');
    // var address = $('.item>.address');
    // var message = $('.item>.message');
    // // alert('h');
    // for (var i = 0; i < items.length; i++) {
    //     items[i].index = i;
    //     items.eq(i).click(function() {
    //         for (var j = 0; j < items.length; j++) {
    //             detail.eq(j).css('display') = '';
    //             address.eq(j).css('display') = '';
    //             message.eq(j).css('display') = '';
    //         }
    //     })
    // }
})
