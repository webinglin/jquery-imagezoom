/*
    自定义的图片预览插件
    自定义的这个插件直接监听click时间，然后点击的时候弹出一个新的窗口即可
    预览的图片直接相对body元素定位，让img元素可以在任何元素下定义而不出现样式错乱问题
    如果在iframe里面定义，那就相对于iframe了

    开发说明:
    1. 引入 jq-imagezoom.css 和 jq-imagezoom.js
    2. 需要预览的图片上添加样式 .pre-image-zoom

    3. 这样就可以实现图片 点击缩略图 显示大图的效果了

    @since 2018-03-15 by linwb
 */

$(function(){
    var winWidth = $(window).width(), winHeight = $(window).height();
    $("body").append("<div class='pre-image-container'><img style='max-height:"+winHeight+"px; max-width:"+winWidth+"px;'/><span></span></div>");

    $(document).on("click",".pre-image-container", function() {
        $(".pre-image-container").hide();
    });

    $(document).on("click",".pre-image-zoom", function(){
        $(".pre-image-container >img").attr("src", $(this).attr("src"));

        $(".pre-image-container").show();
    });
});
