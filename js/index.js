$(function(){
    let winWidth;
    $(window).resize(function(){ //.resize => 윈도우 창이 변경되면 발생하는 이벤트 메소드
        winWidth = $(this).width();
        console.log(winWidth);
        if(winWidth <= 1024){ // 태블릿 또는 모바일 화면크기였을때 아래이벤트 해제
            $('main-menu').off('mouseenter');
            $('main-menu').off('mouseleave');
            $('nav').prependTo('.h-top');
            $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO-b.svg');
        }else{
            $('nav').appendTo('header');
            $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO.svg');
            $('.main-menu').on({
                mouseenter: function(){
                    $('.sub-menu, .sub-bg').stop().slideDown();
                },
                mouseleave: function(){
                    $('.sub-menu, .sub-bg').stop().slideUp();
                }
            });
        }
    });
    //resize 이벤트 종료

    $(window).trigger('resize'); // resize 이벤트 강제 발생
    $('.menu-btn').click(function(event){
        event.stopPropagation(); // stopPropagation() >> 부모영역까지 이벤트 전달이 안되도록 하는 메소드
        $('.index-wrap').css('filter','blur(10px)');
        $('body, html').css({
            height: '100vh',
            overflow: 'hidden'
        })
        $('.menu-area').show();
        $('.h-top').animate({
            right:'0%'
        },'fast');
    });
    //태블릿, 모바일 일때 사용하는 햄버거메뉴(三) 종료
    
    $('.main-menu > li > a').click(function(event){
        event.stopPropagation(); // stopPropagation() >> 부모영역까지 이벤트 전달이 안되도록 하는 메소드
        $(this).siblings('.sub-menu').animate({ // siblings() >> 형제요소들중에 찾는것
            left:'0%'
        },'fast');
    });

    $('.all > a').click(function(event){
        event.stopPropagation(); // stopPropagation() >> 부모영역까지 이벤트 전달이 안되도록 하는 메소드
        $(this).parents('.sub-menu').animate({ // parents() >> 부모들 전부에서 찾는것
            left: '150%'
        },'fast') 
    });

    $('.menu-area').click(function(){
        $('body, html').css({
            height: 'auto',
            overflow: 'visible'
        })
        $('.index-wrap').css('filter','blur(0px)');
        $('.h-top').animate({
            right:'-100%'
        },'fast', function(){
            $('.menu-area').hide();
        });
    });

    if(winWidth <= 480){
        $('.main-01 img').attr('src','images/M-01-mobile.png');
        $('.main-02 img').attr('src','images/M-02-mobile.png');
        $('.main-03 img').attr('src','images/M-03-mobile.png');
    }else{
        $('.main-01 img').attr('src','images/M-01.png');
        $('.main-02 img').attr('src','images/M-02.png');
        $('.main-04 img').attr('src','images/M-03.png');
    }


    //swiper 플러그인
    let swiperSlide = new Swiper('.Featured-slide',{
        //모바일 기준
        slidesPerView:'auto',
        spaceBetween:8,
        pagination: {
            el: '.f-pager',
            clickable: true,
            type:'fraction'
        },
        navigation:{
            prevEl:'.f-prev',
            nextEl:'.f-next'
        },
        //반응형(화면 넓이에 따라 레이아웃 변경)
        breakpoints:{
            1025:{
                slidesPerView:3,
                spaceBetween:24
            },
            480:{
                slidesPerView:'auto',
                spaceBetween:16
            }
        }
    });

});