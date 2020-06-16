$(function(){
    $("#prompt").dialog({
        modal: true,
        buttons:{
            Submit: function(){
                $(this).dialog("close");
            }
        },
        hide:{
            effect: "clip",
            duration: 1000
        }
            
    });
});