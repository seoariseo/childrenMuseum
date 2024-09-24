$(function(){

    $(".reserve_list").slick({
        autoplay :false,
        arrows:true,
        dots: false,
        slidesToShow: 3,
        infinite: false
    })//slick

    $(".view_content > h3").click(function(){
        $(".view_content > h3").removeClass("on");
        $(this).addclass("on");

        $(".view_content > ul").hide();
        $(this).find(".edu > ul").css({"z-index" : "100"})
    })//click




})//