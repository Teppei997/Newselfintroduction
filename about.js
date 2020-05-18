$(function(){
    $('.header-right li').mouseenter(function(){
        $(this).siblings().find('ul').slideUp();
        $(this).children().slideDown('fast');
        
    });

    $('html').click(function(){
        $('.header-right ul li').slideUp();
       
       
    })
    $('body').bgSwitcher({
        images: ['img/bannri.JPG','img/statue.JPG','img/canada.JPG'], // 切り替える背景画像を指定
        interval:2000,
    })
})