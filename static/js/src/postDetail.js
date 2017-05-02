$(document).ready(function(){
    var timer;

    common.bindScroll(300);
    common.bindMouseMove(100);
    $("#zyExpand").click(function(){
        var el=$(this);
        if(el.data("current-status")=="close"){
            el.data("current-status","open");
            el.parent().addClass("zyActive");
            el.removeClass("icon-arrow-left").addClass("icon-arrow-right");
            $("#zyBlackout").removeClass("zyHidden");
        }else{
            el.data("current-status","close");
            el.parent().removeClass("zyActive");
            el.removeClass("icon-arrow-right").addClass("icon-arrow-left");
            $("#zyBlackout").addClass("zyHidden");
        }
    });
    $("#zySendComment").click(function(){
        var commentInput=$("#zyCommentInput"),
            commentContent=commentInput.val();
        if(commentContent){
            $("#zyCommentList").append('<div class="zyItem">'+
                '<span class="zyDate">2019-09-04</span>'+
                '<p class="zyContent">'+
                commentContent+
                '</p>'+
                '</div>');
            commentInput.val("");
        }
    });
    $("#zyCollect").click(function(){
        if($(this).hasClass("zyActive")){
            $(this).removeClass("zyActive");
        }else{
            $(this).addClass("zyActive");
        }
    });
    $(window).scroll(function(){
        if(timer){
            clearTimeout(timer);
        }
        timer=setTimeout(function(){
            if(window.scrollY>=$("#zyPosts").offset().top){
                $("#zySidePanel").addClass("zyHidden").removeClass("zyActive");
                $("#zyBlackout").addClass("zyHidden");
                $("#zyExpand").data("current-status","close");
                $("#zyExpand").removeClass("icon-arrow-right").addClass("icon-arrow-left");
            }else{
                $("#zySidePanel").removeClass("zyHidden");
            }
        },100);
    });
});