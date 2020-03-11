// 只用一次的计时器
var timer = setTimeout(function () {
    $('.wrapper').removeClass('init');
}, 200)

$('.item').click(function() {
    $(this).addClass('active');
    // 善用css类的选择条件
    $('.wrapper').addClass('wrapper-active');
})
$('.close').click(function (e) {
    // 需要去掉冒泡操作
    e.stopPropagation();
    $('.wrapper').removeClass('wrapper-active');
    $('.active').removeClass('active');
})