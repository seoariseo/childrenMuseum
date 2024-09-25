$(function(){
    
    $(".sub").slick({
        autoplay :false,
        arrows:true,
        dots: false,
        slidesToShow: 3,
        infinite: false
    })//slick


    $(".btn li").click(function(){
        $(".btn li").removeClass("on");
        $(this).addClass("on");
        var n = $(this).index();
        // $(".res_group > div").removeClass("on");
        // $(".res_group > div").eq(n).addClass("on")

        $(".reserve_box").hide();
        $(".reserve_box").eq(n).show();


    })//click

})