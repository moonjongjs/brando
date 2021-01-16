
//IIFE(즉시실행함수 표현식)
;(function($, $w, $d, undefined){ //매개변수
    // ECMA Script 5 (이크마 스크립트 5)

    //객체
    var brando = {
        init:       function(){ //메서드(리터럴함수)
            this.smoothScrollFn();
            this.headerFn();
            this.section01234Fn(); //섹션 01, 02, 03, 04 반응형
            this.section06Fn();
            this.section07Fn();
            this.section08Fn();
            this.section09Fn();
            this.section10Fn();
            this.section11Fn();
            this.section12Fn();
            this.section13Fn();
            this.section14Fn();
        },
        smoothScrollFn: function(){ //브란도 전체 공용 함수 스무스 스크롤링 이벤트 함수

            $('.smoothBtn').on({
                click:  function(event){
                    event.preventDefault();
                    var url = $(this).attr('href'); //#section02 ..... 
                    $('html,body').stop().animate({scrollTop:$( url ).offset().top-60},800,'easeInOutCirc');
                    $('.mobile').stop().slideUp(300);

                }
            });

        },            
        headerFn:   function(){

            //헤더영역 스크롤 이벤트 (페럴럭스)
            var $window = $(window);
            var $header = $('#header');

                //DOM(도큐먼트 오브젝트 모델링) Document Object Modelling
                //BOM(브라우저 오브젝트 모델링) Browser Object Modelling
                //마우스로 스크롤값이 아래로 30픽셀이상 >= 내려가면 
                //선택자 헤더영역(#header)에 효과 이벤트가 발생하게 하라   

                $window.scroll(function(){ //스크롤 이벤트
                    //console.log(  $(window).scrollTop() ); //스크롤 탑값 확인
                    if( $window.scrollTop() >= 30 ){  //마우스로 스크롤값이 아래로 30픽셀이상 내려가면
                        $header.addClass('addHeader');  //헤더에 클래스 추가
                    }
                    else{
                        $header.removeClass('addHeader'); //추가된 클래스 삭제
                    }
                });

                //모바일 버튼 클릭 이벤트
                $('.mobilebtn').on({
                    click:  function(){
                        $('.mobile').stop().slideToggle(300);
                    }
                });


                //모바일 메뉴가 노출된경우 
                //창너비가 980 초과이면 slideUp() 강제로 안보이게 처리한다.
                function resizeFn(){
                    if( $(window).innerWidth() > 980  ){
                        $('.mobile').stop().slideUp(0);
                    }
                }
                    
                setTimeout(resizeFn,100); //로딩시

                $(window).resize(function(){ //창크기 변경시
                    resizeFn();
                });


        },
        section01234Fn:   function(){
            //섹션1의 높이를 창(window) 높이로 설정하되 반응형으로
            //데스크톱, 테블릿, 모바일등의 크기(resize()리사즈)에 반응하도록

            var $window = $(window);
            var $section1234 = $('#section01, #section02, #section03, #section04');
            var $winH = $window.innerHeight();  //창높이
            var $boxH = $('.box').innerHeight(); //박스높이

                function resizeFn(){
                    $winH = $window.innerHeight();  //창높이 즉시 가져오기
                    $boxH = $('.box').innerHeight(); //박스높이
                    if( $winH < $boxH+80){
                        $winH = $boxH+80;
                    }                   
                    $section1234.css({ height:$winH });       //섹션1234의 높이 창 높이로 설정
                    $('.box').css({ marginTop:-($boxH/2) });  //박스높이/2
                }

                setTimeout(resizeFn,100);

                //창 크기가 변경될 때만 반응하고 실행한다.
                $window.resize(function(){
                    resizeFn();
                });

        },
        section06Fn:   function(){
            //이미지(.bg-img) 위에 마우스 올리면 이벤트 발생

            $('.bg-img').on({
                mouseenter: function(){
                    $('.bg-img').removeClass('addHover');
                    $(this).addClass('addHover');
                },
                //먼저 html 에서 'tabindex=0' 설정하고 키보드 접근 
                //focusin 또는 focus  / 반대 (blur  또는 focusout)
                focusin: function(){ 
                    $('.bg-img').removeClass('addHover');
                    $(this).addClass('addHover');
                }
            });

        },
        section07Fn:   function(){
            //이미지(.bg-img) 위에 마우스 올리면 이벤트 발생

            $('.profile-gap').on({
                mouseenter: function(){
                    $('.profile-gap').removeClass('addProfile');
                    $(this).addClass('addProfile');
                },
                //먼저 html 에서 'tabindex=0' 설정하고 키보드 접근 
                //focusin 또는 focus  / 반대 (blur  또는 focusout)
                focusin: function(){ 
                    $('.profile-gap').removeClass('addProfile');
                    $(this).addClass('addProfile');
                }
            });
        },
        section08Fn:   function(){

        },
        section09Fn:   function(){

        },
        section10Fn:   function(){

        },
        section11Fn:   function(){

        },
        section12Fn:   function(){

        },
        section13Fn:   function(){

        },
        section14Fn:   function(){

        }
    };  //객체 끝


    //객체.메서드 실행
    brando.init(); //초기실행함수


})(jQuery, window, document); //아규먼트
