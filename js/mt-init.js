$(window).on('load', function () {
    //----------------------------------common setting-----//
    //lazyload
    var lazyLoadInstance = new LazyLoad({
        elements_selector: 'img.lazy',
        //placeholder: '/images/basic/placeholder.gif',
        effect: 'fadeIn',
        fadeTime: 600,
        threshold: 0,
    });
    //AOS
    AOS.init({
        duration: 600, // values from 0 to 3000, with step 50ms
        offset: 200, // offset (in px) from the original trigger point
        easing: 'ease-out', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
    });
    // mt-news-tab-1
    var resizeTimer1;
    function tabSet() {
        var tab_headerHeight = Math.floor($('.header').outerHeight(true));
        $('.tabs').each(function () {
            var _tab = $(this),
                _tabItem = _tab.find('.tabItem'),
                // _tabItemA = _tabItem.children('a'), //改button後，這行沒有
                _tabContent = _tab.find('.tabContent'),
                tabwidth = _tab.width(),
                tabItemHeight = _tabItem.outerHeight(),
                tabContentHeight = _tab.find('.active').next().innerHeight(),
                tiGap = 0,
                tabItemLength = _tabItem.length,
                tabItemWidth;
            _tab.find('.active').next('.tabContent').show();
            if ($(window).width() >= 768) {
                _tabContent.css('top', tabItemHeight);
                _tab.height(tabContentHeight + tabItemHeight);
                tabItemWidth = (tabwidth - (tabItemLength - 1) * tiGap) / tabItemLength;
                _tabItem.width(tabItemWidth).css('margin-left', tiGap);
                _tabItem.first().css('margin-left', 0);
                _tabItem
                    .last()
                    .css({
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    })
                    .width(tabItemWidth);
            } else {
                _tab.css('height', 'auto');
                _tabItem.width(tabwidth);
                _tabItem.css('margin-left', 0).last().css('position', 'relative');
            }
            _tabItem.focus(tabs); //改button後，前面改_tabItem
            _tabItem.click(tabs); //改button後，前面改_tabItem
            function tabs(e) {
                var _tabItemNow = $(this), //改button後，原來$(this).parent(),改$(this)
                    tvp = _tab.offset().top,
                    tabIndex = _tabItemNow.index() / 2,
                    scollDistance = tvp + tabItemHeight * tabIndex - tab_headerHeight;
                _tabItem.removeClass('active');
                _tabItemNow.addClass('active');
                if ($(window).width() <= 767) {
                    _tabItem.not('.active').next().slideUp();
                    _tabItemNow.next().slideDown();
                    $('html,body').stop(true, false).animate({
                        scrollTop: scollDistance,
                    });
                } else {
                    _tabItem.not('.active').next().hide();
                    _tabItemNow.next().show();
                    tabContentHeight = _tabItemNow.next().innerHeight();
                    _tab.height(tabContentHeight + tabItemHeight);
                }
                e.preventDefault();
            }
        });
    }
    $(function () {
        /*-----------------------------------*/
        ////////////////多組Tab////////////////
        /*-----------------------------------*/
        var _window = $(window);
        _window.resize(function () {
            clearTimeout(resizeTimer1);
            resizeTimer1 = setTimeout(function () {
                ww = _window.outerWidth();
                tabSet();
            }, 50);
        });
        $('.tabs>.tabItem:first-child>a').trigger('click');
        tabSet();
    });
});
