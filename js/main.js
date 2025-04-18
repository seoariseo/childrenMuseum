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


    //슬릭 - 예약창
    $(".reserve_list").slick({
        autoplay :false,
        arrows:true,
        dots: false,
        slidesToShow: 3,
        infinite: false,
        variableWidth : true,
        responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 1024, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:2 
                } 
            },
            { 
                breakpoint: 768, //화면 사이즈 768px
                settings: {	
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:2 
                } 
            }
        ]  
        
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

    //슬릭
    $(".P_img_list").slick({autoplay:true});
    $('.P_img_list').on('afterChange', function(event, slick, currentSlide){
        $(".current_num").text(currentSlide + 1);
    });
        
    //슬릭
        $(".N_box2_list").slick({})//slick
        $('.N_box2_list').on('afterChange', function(event, slick, currentSlide){
            $(".current_num02").text(currentSlide + 1);
        });

    //슬릭
        $(".N_box3_list").slick({})//slick
        $('.N_box3_list').on('afterChange', function(event, slick, currentSlide){
            $(".current_num03").text(currentSlide + 1);
        });
        
        //구름 스크롤 애니메이션
        $(window).scroll(function(){
            let top = $(window).scrollTop();
            // console.log("scrollTop :" , top) 2100
            if(top >= 2400){
                $(".W_cloud_img01").css({"left" : "-420px"})
                $(".W_cloud_img02").css({"right" : "-400px"})
                $(".W_cloud_img03").css({"right" : "-340px"})
            }else{
                $(".W_cloud_img01").css({"left" : "-800px"})
                $(".W_cloud_img02 , .W_cloud_img03 ").css({"right" : "-800px"})
            }
        })//

       
        
    }) //jquery
