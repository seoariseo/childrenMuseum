$(function () {
    //SNS
    $(".sns").click(function () {
        $(".sub_sns").stop().slideToggle();
    }) //$(".lang").click


    //언어
    $(".lang").click(function () {
        $(".sub_lang").stop().slideToggle();
    }) //$(".lang").click

    //박물관 리스트
    $(".museum_choice").click(function () {
        $(".sub_museum").stop().slideToggle();
    }) //$(".museum_choice").click


    // 메뉴
    $(".h_down_menu > li , .down_sub_menu li").mouseover(function () {
        $(".down_sub_menu, .sub_left_img").stop().fadeIn();
        $(".header").addClass("act");
    }) //$(".h_down_menu > li").mouseover

    $(".head_inner02").mouseleave(function () {
        $(".down_sub_menu, .sub_left_img").stop().hide();
        $(".header ").removeClass("act");
    }) //$(".h_down_menu > li").mouseleave


    //검색
    $(".search").click(function () {
        $(".search_box").css({"display" : "block"});
    }) //$(".search").click


    //검색 닫기
    $(".close_btn").click(function () {
        $(".search_box").css({"display" : "none"});
    }) //$(".close_btn").click






}) //jquery