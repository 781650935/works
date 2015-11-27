/**
 * Created by Rayr Lee on 2015/6/18.
 */

(function(){

    var dom = {
        bannerBox: $('.banner-images'),
        bannerBtn: $('.banner-btngroup')
    }

    var iShare = {
        init: function(){
            this.flashInit();

        },
        evFn: function () {
            var that = this;
            $(window).resize(function(){
                var _ww = $(window).width();
                if(_ww < 1140){
                    that.flashInit();
                }
            })
        },
        flashInit: function(){
            var _o = dom.bannerBox;
                _w = _o.width(),
                _l = _o.find('.item').length,
                _html = '<li class="item item-active"></li>';

            dom.bannerBox.find('.inner').css('width', _w * _l);
            _o.find('.item').css('width', _w);

            for(var i = 0; i < _l - 1; i++){
                _html = _html + '<li class="item"></li>';
            }

            dom.bannerBtn.html(_html);
        },

        flashBanner: function(){

        }
    };

    iShare.init();
})()