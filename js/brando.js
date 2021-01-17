
//IIFE(즉시실행함수 표현식)
;(function($, window, document, undefined){ //매개변수
    // ECMA Script 5 (이크마 스크립트 5)

    //객체
    var brando = {
        init:       function(){ //메서드(리터럴함수)
            this.smoothScrollFn();
            this.headerFn();
            this.section01234Fn(); //섹션 01, 02, 03, 04 반응형
            this.section06Fn();
            this.section07Fn();

            this.section09Fn();
            this.section10Fn();
            this.section11Fn();
            this.section12Fn();
            this.section13Fn();
            this.section14Fn();
        },
        smoothScrollFn: function(){ //브란도 전체 공용 함수 스무스 스크롤링 이벤트 함수
            var $smoothBtn  = $('.smoothBtn');
            var $htmlBody   = $('html,body');
            var $mobile     = $('.mobile');

                $smoothBtn.on({
                    click:  function(event){
                        event.preventDefault();
                        $this = $(this); //현재 클릭한 이(this) 버튼

                        var url = $this.attr('href'); //#section02 ..... 
                        $htmlBody.stop().animate({scrollTop:$( url ).offset().top-60},800,'easeInOutCirc');
                        $mobile.stop().slideUp(300);
                    }
                });

        },            
        headerFn:   function(){

            //헤더영역 스크롤 이벤트 (페럴럭스)
            var $window     = $(window);
            var $header     = $('#header');
            var $mobilebtn  = $('.mobilebtn');
            var $mobile     = $('.mobile');

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
                $mobilebtn.on({
                    click:  function(){
                        $mobile.stop().slideToggle(300);
                    }
                });


                //모바일 메뉴가 노출된경우 
                //창너비가 980 초과이면 slideUp() 강제로 안보이게 처리한다.
                function resizeFn(){
                    if( $window.innerWidth() > 980  ){
                        $mobile.stop().slideUp(0);
                    }
                }
                    
                setTimeout(resizeFn,100); //로딩시

                $window.resize(function(){ //창크기 변경시
                    resizeFn();
                });


        },
        section01234Fn:   function(){
            //섹션1의 높이를 창(window) 높이로 설정하되 반응형으로
            //데스크톱, 테블릿, 모바일등의 크기(resize()리사즈)에 반응하도록

            var $window       = $(window);
            var $section1234  = $('#main #section01, #main #section02, #main #section03, #main #section04');
            var $winH         = $window.innerHeight();  //창높이
            var $box          = $('#main .section0234 .box');
            var $boxH         = $box.innerHeight(); //박스높이 섹션2,3,4 에서만 사용



                function resizeFn(){
                    $winH = $window.innerHeight();  //창높이 즉시 가져오기
                    $boxH = $box.innerHeight(); //박스높이
                    if( $winH < $boxH+80){
                        $winH = $boxH+80;
                    }                   
                    $section1234.css({ height:$winH });       //섹션1234의 높이 창 높이로 설정
                    $box.css({ marginTop:-($boxH/2) });  //박스높이/2
                }

                setTimeout(resizeFn,100);

                //창 크기가 변경될 때만 반응하고 실행한다.
                $window.resize(function(){
                    resizeFn();
                });

        },
        section06Fn:   function(){
            //이미지(.bg-img) 위에 마우스 올리면 이벤트 발생
            var $bgImg = $('#main #section06 .bg-img'); //섹션6 영역 안에서만 사용


            $bgImg.on({
                mouseenter: function(){
                    var $this = $(this);
                        $bgImg.removeClass('addHover');
                        $this.addClass('addHover');
                },
                //먼저 html 에서 'tabindex=0' 설정하고 키보드 접근 
                //focusin 또는 focus  / 반대 (blur  또는 focusout)
                focusin: function(){ 
                    var $this = $(this);                    
                        $bgImg.removeClass('addHover');
                        $this.addClass('addHover');
                }
            });

        },
        section07Fn:   function(){
            //이미지(.bg-img) 위에 마우스 올리면 이벤트 발생
            var $profileGap = $('#main #section07 .profile-gap');  //섹션7 영역 안에서만 사용


            $profileGap.on({
                mouseenter: function(){
                    $profileGap.removeClass('addProfile');
                    $(this).addClass('addProfile');
                },
                //먼저 html 에서 'tabindex=0' 설정하고 키보드 접근 
                //focusin 또는 focus  / 반대 (blur  또는 focusout)
                focusin: function(){ 
                    $profileGap.removeClass('addProfile');
                    $(this).addClass('addProfile');
                }
            });
        },

        section09Fn:   function(){
            var $window      = $(window);
            var imgW         = $('#main #section09 .gallery-item').innerWidth(); //이미지 박스 너비
            var $galleryItem = $('#main #section09 .gallery-item'); //이미지 박스
            var per          = 0.75;
            var imgH         = imgW * per; //이미지 박스 높이
                $galleryItem.css({ height: imgH });

            var $gllBtn      = $('.gll-btn');



                //반응형 이미지 너비에 따라 높이의 변화
                //이미지 박스 높이 = 이미지 박스의 너비 * .75
                function resizeFn(){
                    imgW    = $('#main #section09 .gallery-item').innerWidth();
                    imgH    = imgW * per;
                    $galleryItem.css({ height: imgH });
                }
                resizeFn();//로딩시 1호 실행

                $window.resize(function(){ //반응형 너비, 높이 변경시 마다 계속 수행
                    resizeFn();
                });


                //갤러리 네비게이션 버튼 클릭 이벤트
                $gllBtn.on({
                    click: function(){
                        $gllBtn.removeClass('addNav');
                        $(this).addClass('addNav');
                    }
                });




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
