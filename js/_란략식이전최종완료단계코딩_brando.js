
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
           var tot                 = $('#section09 .gallery-item').length;  //전체 갤러리 갯수
           var hideCount           = 0;
           var n                   = tot-hideCount;                         //숨김 요소를 제외한 실제 갯수
           var cols                = 4;                                     //기본 칸수
           var imgW                = 0;                                     //이미저 너비 
           var imgH                = imgW*0.75;                             //이미지 높이
           var rows                = Math.ceil(n/cols);                     //줄수
           var $gllBtn             = $('#section09 .gll-btn');              //갤러리 상단 내비게이션 버튼
           var idx                 = 0;                                     //내비게이션 첫번째 버튼 인덱스 값
           var $winW               = $(window).innerWidth();                //창 너비
           var $s9GalleryItem      = $('#section09 .gallery-item');         //갤러리 항목(li)
           var $s9galleryContainer = $('#section09 .gallery-container');    //갤러리 전체 컨테이너 박스
           var $section09          = $('#section09');                       //섹션09 






                //갤러리 반응형 함수
                function resizeFn(){
                    //창의 너비를 즉각 반영하도록 너비를 가져오기
                    $winW = $(window).innerWidth();

                    if( $winW > 1200 ){
                        cols=4;
                    }
                    else if( $winW >=990 ){
                        cols=3;
                    }
                    else if( $winW > 760 ){
                        cols=2;
                    }
                    else{
                        cols=1;
                    }
                    
                    imgW = $winW/cols;
                    imgH = imgW*.75;

                    $s9GalleryItem.removeClass('addScale');                    
                    $s9GalleryItem.css({ width:imgW, height:imgH }); //갤러리 이미지의 너비 높이 구함
                    
                    switch(idx){
                        case 0: //ALL
                            $s9GalleryItem.removeAttr('data-hide');//이전에 감춰진 속성 data-hide

                           
                            if(cols==4){
                                let k=-1;
                                for(let i=0; i<=1; i++){ //0 ~ 1
                                    for(let j=0; j<=3; j++){ //0 ~ 3
                                        k++; //k=k+1
                                        console.log( i, j, k ); //0 0 1 2 3 / 1 0 1 2 3
                                    }
                                }

                                
                               $s9GalleryItem.eq(0).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(1).stop().show().animate({left:imgW*1,top:imgH*0});
                               $s9GalleryItem.eq(2).stop().show().animate({left:imgW*2,top:imgH*0});
                               $s9GalleryItem.eq(3).stop().show().animate({left:imgW*3,top:imgH*0});
    
                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(5).stop().show().animate({left:imgW*1,top:imgH*1});
                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*2,top:imgH*1});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*3,top:imgH*1});
                                
    
                            }
                            else if(cols==3){
                               $s9GalleryItem.eq(0).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(1).stop().show().animate({left:imgW*1,top:imgH*0});
                               $s9GalleryItem.eq(2).stop().show().animate({left:imgW*2,top:imgH*0});

                               $s9GalleryItem.eq(3).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*1,top:imgH*1});
                               $s9GalleryItem.eq(5).stop().show().animate({left:imgW*2,top:imgH*1});

                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*0,top:imgH*2});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*1,top:imgH*2});
                                
                            }                           
                            else if(cols==2){
                               $s9GalleryItem.eq(0).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(1).stop().show().animate({left:imgW*1,top:imgH*0});

                               $s9GalleryItem.eq(2).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(3).stop().show().animate({left:imgW*1,top:imgH*1});

                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*0,top:imgH*2});
                               $s9GalleryItem.eq(5).stop().show().animate({left:imgW*1,top:imgH*2});

                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*0,top:imgH*3});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*1,top:imgH*3});
                                    
                            }
                            else{ //1칸
                               $s9GalleryItem.eq(0).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(1).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(2).stop().show().animate({left:imgW*0,top:imgH*2});
                               $s9GalleryItem.eq(3).stop().show().animate({left:imgW*0,top:imgH*3});
                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*0,top:imgH*4});
                               $s9GalleryItem.eq(5).stop().show().animate({left:imgW*0,top:imgH*5});
                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*0,top:imgH*6});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*0,top:imgH*7});
                                   
                            }
                            
                            
                            
                            break;
                        case 1: //BREAKFAST
                           $s9GalleryItem.removeAttr('data-hide');
                           $s9GalleryItem.eq(0).attr('data-hide',1).stop().hide();
                           $s9GalleryItem.eq(2).attr('data-hide',1).stop().hide();

                            if(cols==4){
                               $s9GalleryItem.eq(1).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(3).stop().show().animate({left:imgW*1,top:imgH*0});
                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*2,top:imgH*0});
                               $s9GalleryItem.eq(5).stop().show().animate({left:imgW*3,top:imgH*0});
    
                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*1,top:imgH*1});
                            }
                            else if(cols==3){
                               $s9GalleryItem.eq(1).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(3).stop().show().animate({left:imgW*1,top:imgH*0});
                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*2,top:imgH*0});

                               $s9GalleryItem.eq(5).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*1,top:imgH*1});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*2,top:imgH*1});
                            }
                            else if(cols==2){
                               $s9GalleryItem.eq(1).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(3).stop().show().animate({left:imgW*1,top:imgH*0});

                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(5).stop().show().animate({left:imgW*1,top:imgH*1});

                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*0,top:imgH*2});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*1,top:imgH*2});
                            }
                            else{
                               $s9GalleryItem.eq(1).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(3).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*0,top:imgH*2});
                               $s9GalleryItem.eq(5).stop().show().animate({left:imgW*0,top:imgH*3});
                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*0,top:imgH*4});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*0,top:imgH*5});
                            }



                            break;
                        case 2: //DINNER
                           $s9GalleryItem.removeAttr('data-hide');                           
                           $s9GalleryItem.eq(1).attr('data-hide',2).stop().hide();
                           $s9GalleryItem.eq(3).attr('data-hide',2).stop().hide();
                           $s9GalleryItem.eq(4).attr('data-hide',2).stop().hide();
                           $s9GalleryItem.eq(5).attr('data-hide',2).stop().hide();

                            if(cols==4){
                               $s9GalleryItem.eq(0).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(2).stop().show().animate({left:imgW*1,top:imgH*0});
                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*2,top:imgH*0});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*3,top:imgH*0});
    
                            }
                            else if(cols==3){
                               $s9GalleryItem.eq(0).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(2).stop().show().animate({left:imgW*1,top:imgH*0});
                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*2,top:imgH*0});

                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*0,top:imgH*1});
    
                            }
                            else if(cols==2){
                               $s9GalleryItem.eq(0).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(2).stop().show().animate({left:imgW*1,top:imgH*0});
                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*1,top:imgH*1});
    
                            }
                            else{
                               $s9GalleryItem.eq(0).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(2).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*0,top:imgH*2});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*0,top:imgH*3});
                            }


                            break;
                        case 3: //DRINKS
                           $s9GalleryItem.removeAttr('data-hide');
                           $s9GalleryItem.eq(0).attr('data-hide',3).stop().hide();
                           $s9GalleryItem.eq(2).attr('data-hide',3).stop().hide();
                           $s9GalleryItem.eq(5).attr('data-hide',3).stop().hide();

                            if(cols==4){
                               $s9GalleryItem.eq(1).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(3).stop().show().animate({left:imgW*1,top:imgH*0});
                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*2,top:imgH*0});
                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*3,top:imgH*0});
    
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*0,top:imgH*1});
    
                            }
                            else if(cols==3){
                               $s9GalleryItem.eq(1).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(3).stop().show().animate({left:imgW*1,top:imgH*0});
                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*2,top:imgH*0});

                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*1,top:imgH*1});
    
                            }
                            else if(cols==2){
                               $s9GalleryItem.eq(1).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(3).stop().show().animate({left:imgW*1,top:imgH*0});

                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*1,top:imgH*1});

                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*0,top:imgH*2});
                            }
                            else{
                               $s9GalleryItem.eq(1).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(3).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*0,top:imgH*2});
                               $s9GalleryItem.eq(6).stop().show().animate({left:imgW*0,top:imgH*3});
    
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*0,top:imgH*4});
                            }

                            break;
                        default:  //LUNCH
                           $s9GalleryItem.removeAttr('data-hide');
                           $s9GalleryItem.eq(0).attr('data-hide',4).stop().hide();
                           $s9GalleryItem.eq(1).attr('data-hide',4).stop().hide();
                           $s9GalleryItem.eq(3).attr('data-hide',4).stop().hide();
                           $s9GalleryItem.eq(6).attr('data-hide',4).stop().hide();
   

                            if(cols==4){
                               $s9GalleryItem.eq(2).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*1,top:imgH*0});
                               $s9GalleryItem.eq(5).stop().show().animate({left:imgW*2,top:imgH*0});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*3,top:imgH*0});
        
                            }
                            else if(cols==3){
                               $s9GalleryItem.eq(2).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*1,top:imgH*0});
                               $s9GalleryItem.eq(5).stop().show().animate({left:imgW*2,top:imgH*0});

                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*0,top:imgH*1});    
    
                            }
                            else if(cols==2){
                               $s9GalleryItem.eq(2).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*1,top:imgH*0});
                               $s9GalleryItem.eq(5).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*1,top:imgH*1});
    
                            }
                            else{
                               $s9GalleryItem.eq(2).stop().show().animate({left:imgW*0,top:imgH*0});
                               $s9GalleryItem.eq(4).stop().show().animate({left:imgW*0,top:imgH*1});
                               $s9GalleryItem.eq(5).stop().show().animate({left:imgW*0,top:imgH*2});
                               $s9GalleryItem.eq(7).stop().show().animate({left:imgW*0,top:imgH*3});
                                    
                            }


                    } //switch() 끝


                   //n 변수 감춰진 요소 뺀 갯수
                   //n 변수의 변화되는 함수 호출 
                   hideCountFn();
                    n = tot - hideCount;  //show() 보이는 갯수
                    rows = Math.ceil(n/cols);                       //줄수 = 전체 갤러리 갯수/칸수
                    $s9galleryContainer.css({height:imgH*rows});  //갤러리 전체박스 높이를 구함                   
                    
                    $s9GalleryItem.addClass('addScale');

                }//resizeFn() 끝

                function hideCountFn(){
                    hideCount = 0; //함수를 호출 때 마다 초기 값을 0 으로셋팅
                    $s9GalleryItem.each(function(){ //반복처리
                        if( $(this).attr('data-hide') ){
                            hideCount++;
                        }
                    });
                }



                $(window).resize(function(){
                    resizeFn();
                });

                setTimeout(resizeFn,10);

                
                
                
                //갤러리 네비게이션 버튼 클릭 이벤트
                $gllBtn.each(function(index){
                    $(this).on({
                        click: function(event){
                            event.preventDefault();
                            $gllBtn.removeClass('addNav');
                            $(this).addClass('addNav');
                            
                            idx = index; //switch() 변수 idx에 버튼 번호 index를  전달
                            resizeFn();

                        } //click event 끝
                    });
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
