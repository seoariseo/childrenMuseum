$(function(){

    $(".reserve_list").slick({
        autoplay :false,
        arrows:true,
        dots: false,
        slidesToShow: 3,
        infinite: false
    })//slick
    
    $(".Edu_reserve_list").slick({
        autoplay :false,
        arrows:true,
        dots: false,
        slidesToShow: 3,
        infinite: false
    })//slick

    $(".titName li").click(function(){
        $(".titName li").removeClass("on");
        $(this).addClass("on");
        var n = $(this).index();
        // $(".res_group > div").removeClass("on");
        // $(".res_group > div").eq(n).addClass("on")

        $(".res_group > div").hide();
        $(".res_group > div").eq(n).show();


    })//click



})//