var _window = $(window);
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

    if ($('.search-function').length > 0) {
        $('body').append(
            '<div class="mobile_pop"><a href="#" class="btn-close"><i class="fas fa-times"></i></a><div class="container"></div></di></div>'
        );
        $('.search-function').clone().appendTo('.mobile_pop .container');
        $('.btn-filter')
            .off()
            .click(function (e) {
                $('.mobile_pop').stop().addClass('open');
                e.preventDefault();
            });
        // filter function
        $('.filter_item').each(function () {
            $(this)
                .find('a.filter_title')
                .off()
                .click(function (e) {
                    $(this).stop().toggleClass('close');
                    $(this).siblings('.filter_content').stop().slideToggle();
                    e.preventDefault();
                });
        });
        $('.mobile_pop')
            .find('a.btn-close')
            .off()
            .click(function (e) {
                $('.mobile_pop').stop().removeClass('open');
                e.preventDefault();
            });
    }

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
    // /*------------------------------------*/
    // ///////table 加上響應式 scroltable-wrapper/////
    // /*------------------------------------*/
    $('table').each(function (index, el) {
        //判斷沒有table_list
        if (
            $(this).parents('.table_list').length == 0 &&
            $(this).parents('.fix_th_table').length == 0 &&
            $(this).parent('form').length == 0
        ) {
            $(this).scroltable();
        }
    });
    // tablearrow arrow，為了設定箭頭
    $('.scroltable-nav-left').append('<div class="tablearrow_left" style="display:none;"></div>');
    $('.scroltable-nav-right').append('<div class="tablearrow_right"  style="display:none;"></div>');
    // 固定版頭
    function table_Arrow() {
        if (
            $('table').parents('.table_list').length == 0 &&
            $('table').parents('.fix_th_table').length == 0 &&
            $(this).parent('form').length == 0
        ) {
            if ($('.scroltable-wrapper').length > 0) {
                var stickyArrowTop = Math.floor($('.scroltable-wrapper').offset().top),
                    thisScroll = Math.floor($(this).scrollTop());
                if (thisScroll > stickyArrowTop - 230) {
                    $('.scroltable-wrapper .tablearrow_left').css('display', 'block');
                    $('.scroltable-wrapper .tablearrow_left').css(
                        { top: thisScroll - stickyArrowTop + 220 },
                        100,
                        'easeOutQuint'
                    );
                    $('.scroltable-wrapper .tablearrow_right').css('display', 'block');
                    $('.scroltable-wrapper .tablearrow_right').css(
                        { top: thisScroll - stickyArrowTop + 220 },
                        100,
                        'easeOutQuint'
                    );
                } else {
                    $('.scroltable-wrapper .tablearrow_left').css({
                        top: '10px',
                        display: 'none',
                    });
                    $('.scroltable-wrapper .tablearrow_right').css({
                        top: '10px',
                        display: 'none',
                    });
                }
            }
        }
    }
    $(window).scroll(function (event) {
        table_Arrow();
    });
    var scrollTimer;
    _window.scroll(function () {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () {
            table_Arrow();
        }, 50);
    });
    // /*------------------------------------*/
    // //////////table 加上 data-title//////////
    // /*------------------------------------*/
    function rwdTable() {
        $('.table_list')
            .find('table')
            .each(function () {
                var $row = $(this).find('tr');
                rowCount = $row.length;
                for (var n = 1; n <= rowCount; n++) {
                    $(this)
                        .find('th')
                        .each(function (index) {
                            var thText = $(this).text();
                            $row.eq(n).find('td').eq(index).attr('data-title', thText);
                        });
                }
            });
    }
    rwdTable();
    //sticky sidebar
    if ($('.left_block').length > 0) {
        var stickyLeft = new StickySidebar('.left_block', {
            containerSelector: '.center_block',
            topSpacing: 0,
            bottomSpacing: 0,
            // containerSelector: '.container',
            // // containerSelector: false,
            innerWrapperSelector: '.sidebar__inner',
            minWidth: 768,
            resizeSensor: true,
        });
        stickyLeft.updateSticky();
    }
    // qa
    $('.lp_qa')
        .find('.qa_content')
        .each(function (index) {
            $(this)
                .find('.q_block')
                .children('a')
                .off()
                .click(function (e) {
                    $('.lp_qa').find('.a_block').stop().slideUp('400', 'easeOutQuint');
                    $(this).parents('li').siblings().find('a').removeClass('open');
                    $(this).parents('.topic_group').siblings().find('a').removeClass('open');
                    $(this).toggleClass('open');
                    $(this).parent('.q_block').siblings('.a_block').stop().slideToggle('400', 'easeOutQuint');
                    $(this).blur();
                    e.preventDefault();
                });
        });
});
