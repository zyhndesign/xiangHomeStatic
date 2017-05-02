var common={
    scrollTimer:null,
    moveTimer:null,
    bindScroll:function(targetY){
        var me=this,scrollY,menuEl=$("#zyMenu"),logoEl=$("#zyLogo");
        $(window).scroll(function(){
            if(me.scrollTimer){
                clearTimeout(me.scrollTimer);
            }
            me.scrollTimer=setTimeout(function(){
                scrollY=window.scrollY;
                if(scrollY>=targetY){
                    if(!menuEl.hasClass("zyHidden")){
                        menuEl.addClass("zyHidden");
                        logoEl.removeClass("zyHidden");
                    }
                }else{
                    if(menuEl.hasClass("zyHidden")){
                        menuEl.removeClass("zyHidden");
                        logoEl.addClass("zyHidden");
                    }
                }
                if(menuEl.hasClass("zyTopShow")){
                    menuEl.removeClass("zyTopShow")
                }
            },100);
        });
    },
    bindMouseMove:function(targetY){
        var me=this,menuEl=$("#zyMenu"),logoEl=$("#zyLogo");
        $(document).mousemove(function(e){
            if(me.moveTimer){
                clearTimeout(me.moveTimer);
            }
            me.moveTimer=setTimeout(function(){
                if(e.clientY<targetY){
                    if(menuEl.hasClass("zyHidden")&&!menuEl.hasClass("zyTopShow")){
                        logoEl.addClass("zyHidden");
                        menuEl.removeClass("zyHidden").addClass("zyTopShow");
                    }
                }else{
                    if(menuEl.hasClass("zyTopShow")&&!menuEl.hasClass("zyHidden")){
                        logoEl.removeClass("zyHidden");
                        menuEl.addClass("zyHidden").removeClass("zyTopShow");
                    }
                }
            },100);


        });
    }
}
$(document).ready(function(){

    if(pageName){
       $("#zyMenu").find("a[data-page-name='"+pageName+"']").addClass("zyActive");
    }

});