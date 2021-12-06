// 滑屏模块
let swiperModule = (function() {
    let mySwiper;

    return {
       init() {
               mySwiper = new Swiper('.swiper', {
               initialSlide: 0,
               direction: 'vertical',
               autoplay: true,
               loop: true,
               effect: 'slide',
               
           })

       }
    }
})();

// 音乐区域
let musicModule = (function() {
    
    let $musicAudio = $('.musicAudio'),
        musicAudio = document.querySelector('.musicAudio'),
        $musicIcon = $('#musicIcon');
        console.log($musicIcon);

    function play() {
        musicAudio.play();
        // 取消文档自带的监听
        document.removeEventListener('touchstart', play);
    }
    return {
        init() {
            // 兼容处理
            document.addEventListener("weixinJsBridgeReady", play);
            document.addEventListener("YixinBridgeReady", play);
            document.addEventListener("touchstart", play);
            $musicIcon.tap(function() {
                console.log(musicAudio.paused);
                if (musicAudio.paused) {
                    //当前为暂停状态
                    console.log("11111");
                    play();
                    $musicIcon.addClass('move');
                    return;
                }
                //当前为播放状态
                $musicIcon.removeClass('move');
                musicAudio.pause();
            })
            $musicAudio.on('canplay', function() {
                console.log('111');
                $musicIcon.css('display', 'block');
                musicAudio.play();
                $musicIcon.addClass("move");
            })
            

        }
    }
})();
swiperModule.init();
musicModule.init();