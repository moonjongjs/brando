
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
            var $section1     = $('#main #section01');
            var $section1234  = $('#main #section01, #main #section02, #main #section03, #main #section04');
            var $winH         = $window.innerHeight();  //창높이
            var $box          = $('#main .section0234 .box');
            var $boxH         = $box.innerHeight(); //박스높이 섹션2,3,4 에서만 사용
            var $section1H    = $window.innerHeight();  //창높이


                function resizeFn(){
                    $winH = $window.innerHeight();  //창높이 즉시 가져오기
                    $section1H    = $window.innerHeight();  //창높이
                    $boxH = $box.innerHeight(); //박스높이
                    if( $winH < $boxH+80){
                        $winH = $boxH+80;
                    }                   
                    $section1.css({ height:$section1H });//섹션1의 높이 창 높이로 설정
                    $section1234.css({ height:$winH });  //섹션1234의 높이 창 높이로 설정
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
           var a = []; //show() 배열 요소 인덱스 번호  li.show() 
           var h = []; //hide() 배열 요소 인덱스 번호  li.hide() 
           var $window             = $(window);

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
                            h = [];//배열 초기화
                            a=[0,1,2,3,4,5,6,7];
                            break;
                        case 1: //BREAKFAST
                            h = [0,2];
                            a=[1,3,4,5,6,7];                           
                            break;
                        case 2: //DINNER
                            h = [1,3,4,5];  
                            a = [0,2,6,7];
                            break;
                        case 3: //DRINKS
                            h = [0,2,5]; 
                            a = [1,3,4,6,7];
                            break;
                        default:  //LUNCH
                            h = [0,1,3,6];
                            a = [2,4,5,7];
                    } //switch() 끝



                   //1 hide 요소
                    $s9GalleryItem.removeAttr('data-hide');                    
                    for(var i=0; i<h.length; i++){
                        $s9GalleryItem.eq(h[i]).attr('data-hide',idx).stop().hide();
                    }


                    //2 n 변수 감춰진 요소 뺀 갯수
                    // n 변수의 변화되는 함수 호출 
                    hideCount = 0; //함수를 호출 때 마다 초기 값을 0 으로셋팅
                    $s9GalleryItem.each(function(){ //반복처리
                        if( $(this).attr('data-hide') ){
                            hideCount++;
                        }
                    });
                    n = tot - hideCount;  //show() 보이는 갯수
                    rows = Math.ceil(n/cols);                       //줄수 = 전체 갤러리 갯수/칸수
                    $s9galleryContainer.css({height:imgH*rows});  //갤러리 전체박스 높이를 구함                   


                    //3 show 요소
                    var k=-1;
                    for(var i=0; i<rows; i++){
                        for(var j=0; j<cols; j++){
                            k++;
                            if( k>a.length-1 ) break; //반복문 종료
                            $s9GalleryItem.eq(a[k]).stop().show().animate({left:imgW*j,top:imgH*i});
                        } 
                    } 
                    
                    $s9GalleryItem.addClass('addScale');

                }//resizeFn() 끝


                $window.resize(function(){
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
            var cnt=0;
            var $slide     = $('#section10 .slide');
            var $slideWrap = $('#section10 .slide-wrap');
            var $slideCon  = $('#section10 .slide-container');
            var $slideConW = $('#section10 .slide-container').innerWidth();
            var $nextBtn   = $('#section10 .nextBtn')
            var $prevBtn   = $('#section10 .prevBtn')
            var $window    = $(window);


                function resizeFn(){
                    //슬라이드 콘테이너 너비값을 슬라이드 너비로 설정
                    $slideConW = $slideCon.innerWidth();
                    $slide.css({width:$slideConW});       //슬라이드 1개의 너비
                    $slideWrap.css({width:$slideConW*3}); //슬라이드 전체 3개의 너비
                    mainSlieFn(); //메인 슬라이드 반응형 left 적용
                }
                $window.resize(function(){
                    resizeFn();
                });        
                setTimeout(resizeFn,10);


                //1 메인 슬라이드 함수
                function mainSlieFn(){
                    $slideWrap.stop().animate({left:-($slideConW*cnt)},500,'easeInOutExpo');
                }

                //2 다음 카운트 함수 
                function nextCountFn(){
                    cnt++;
                    if(cnt>2){
                        cnt=2;
                    }
                    mainSlieFn();
                }

                //2 이전 카운트 함수 
                function prevCountFn(){
                    cnt--;
                    if(cnt<0){
                        cnt=0;
                    }
                    mainSlieFn();
                }

                //3. 다음 클릭 버튼 이벤트
                $nextBtn.on({
                    click:  function(event){
                        event.preventDefault();
                        nextCountFn();
                    }
                });

                //3. 이전 클릭 버튼 이벤트
                $prevBtn.on({
                    click:  function(event){
                        event.preventDefault();
                        prevCountFn();
                    }
                });

                //4. 스와이프 터치 이벤트 이벤트
                $slideCon.swipe({
                    swipeLeft:function(){
                        nextCountFn(); 
                    },
                    swipeRight:function(){
                        prevCountFn();
                    }
                });
        },
        section11Fn:   function(){
            //반응형으로 $leftBoxW 왼쪽 이미지 박스 너비를 구해서 텍스트 박스 높이을 설정
            var $window = $(window);
            var $leftBox   = $('#section11 .left-box');
            var $rightBox  = $('#section11 .right-box');
            var $leftBoxW  = $('#section11 .left-box').innerWidth(); //반응형 너비 구하기
                $leftBox.css({height:$leftBoxW});       //반응형 높이 설정
                $rightBox.css({height:$leftBoxW});      //반응형 높이 설정
                $rightBox.css({height:$leftBoxW});      //반응형 높이 설정


                function resizeFn(){
                    $leftBoxW  = $('#section11 .left-box').innerWidth(); //반응형 너비 구하기
                    $leftBox.css({height:$leftBoxW});       //반응형 높이 설정
                    $rightBox.css({height:$leftBoxW});      //반응형 높이 설정
                    $rightBox.css({height:$leftBoxW});      //반응형 높이 설정
                }

                $window.resize(function(){
                    resizeFn();
                });

                setTimeout(resizeFn,10);
            



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
