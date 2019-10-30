$(document).ready(function () {

    $(".burger").click(function(){
        if($(this).next(".nav").css("display")=="none") {
            $(this).next(".nav").slideDown();
            $(".burger").addClass("burger__open");
        }
        else {
            $(".burger").removeClass("burger__open");
            $(this).next(".nav").slideUp();
        }
    });
   
//    document.addEventListener('contextmenu', event => event.preventDefault());

// document.onkeypress = function (event) {
//     event = (event || window.event);
//     if (event.keyCode == 123) {
//        //alert('No F-12');
//         return false;
//     }
// }
// document.onmousedown = function (event) {
//     event = (event || window.event);
//     if (event.keyCode == 123) {
//         //alert('No F-keys');
//         return false;
//     }
// }
// document.onkeydown = function (event) {
//     event = (event || window.event);
//     if (event.keyCode == 123) {
//         //alert('No F-keys');
//         return false;
//     }
// }

// document.addEventListener('keydown', function (event) {
//     if (event.ctrlKey && event.keyCode == 85 || event.ctrlKey && event.shiftKey && event.keyCode == 73 || event.keyCode == 123) {
//         event.preventDefault();
//     }
// }) 

});