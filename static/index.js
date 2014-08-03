$( document ).ready(function() {
    $("#projects-dropdown").click(function() {
        $("#projects").fadeToggle(0);
        $(".pics").toggleClass("hcenter hleft");
    });
});
