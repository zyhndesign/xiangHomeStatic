$(document).ready(function(){
   if(pageName){
       $("#zyMenu").find("a[data-page-name='"+pageName+"']").addClass("zyActive");
   }
});