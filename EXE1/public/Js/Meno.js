$(".nav a").on("click", function() {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $(".nav .slide1").css({ opacity: 1, left: +position.left, width: width });
});

$(".nav a").on("mouseover", function() {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $(".nav .slide2").css({
        opacity: 1,
        left: +position.left,
        width: width
    });
});

$(".nav a").on("mouseout", function() {
    $(".nav .slide2").css({ opacity: 0 });
});

var currentWidth = $(".nav").find("li:nth-of-type(1) a").parent("li").width();
var current = $("li:nth-of-type(1) a").position();
$(".nav .slide1").css({ left: +current.left, width: currentWidth });
//-------------------------------------------------------------------------
function searchToggle(obj, evt) {
    var container = $(obj).closest('.search-wrapper');
    if (!container.hasClass('active')) {
        container.addClass('active');
        evt.preventDefault();
    } else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
        container.removeClass('active');
        // clear input;
        container.find('.search-input').val('');

    }
}
// ------------------------------------------------------------------------
function senddata() {
    let data = $("#inputData").val();
    // console.log(data);
    // let kala = {
    //     data: data,
    // };
    // $.post("/search", kala, function(data, status) {
    //     alert("Data: " + data + "\nStatus: " + status);
    // });
    $("#linksearch").attr("href", `/search/${data}`)
}