var _window = $(window);
$(window).on("load", function () {
  //mt-search
  if ($(".mt-search").length > 0) {
    $(".btn-condition").each(function () {
      $(this)
        .off()
        .click(function (e) {
          $(this)
            .parents(".condition_item")
            .siblings()
            .find(".condition_block")
            .stop()
            .removeClass("open");
          $(this).siblings(".condition_block").stop().toggleClass("open");
          console.log("AAA");
          e.preventDefault();
          e.stopPropagation();
        });
    });
    // click document close lang
    function closeCondition() {
      $(".mt-search")
        .find(".condition_block")
        .stop(true, true)
        .removeClass("open")
        .slideUp("600", "easeOutQuint");
    }
  }
  // 內頁左側欄位 RWD設定 - 會員選單
  if ($(".member-function").length > 0) {
    $("body").append(
      '<div class="mobile_pop for_member"><a href="#" class="btn-close"><i class="fas fa-times"></i></a><div class="container"></div></di></div>'
    );
    $(".member-function").clone().appendTo(".mobile_pop .container");
    $(".btn-member-open")
      .off()
      .click(function (e) {
        $(".mobile_pop").stop().addClass("open");
        e.preventDefault();
      });
    $(".mobile_pop")
      .find("a.btn-close")
      .off()
      .click(function (e) {
        $(".mobile_pop").stop().removeClass("open");
        e.preventDefault();
      });
    // 內頁左側欄位 RWD設定 - 會員功能內頁
    var _member_block = $(".member_block");
    _member_block.find("li").has("ul").addClass("hasli");
    var liHas = _member_block.find("li.hasli");
    _member_block.each(function () {
      $(this)
        .find(liHas)
        .click(function (e) {
          console.log("test");
          $(this)
            .children("ul")
            .stop(true, false)
            .slideToggle("400", "easeOutQuint");
          $(this)
            .siblings()
            .children("ul")
            .stop(true, false)
            .slideUp("400", "easeOutQuint");
          e.preventDefault();
        });
    });
  }
  // 內頁左側欄位 RWD設定 - 搜尋欄位
  if ($(".search-function").length > 0) {
    $("body").append(
      '<div class="mobile_pop"><a href="#" class="btn-close"><i class="fas fa-times"></i></a><div class="container"></div></di></div>'
    );
    $(".search-function").clone().appendTo(".mobile_pop .container");
    $(".btn-filter")
      .off()
      .click(function (e) {
        $(".mobile_pop").stop().addClass("open");
        e.preventDefault();
      });
    // filter function
    $(".filter_item").each(function () {
      $(this)
        .find("a.filter_title")
        .off()
        .click(function (e) {
          $(this).stop().toggleClass("close");
          $(this)
            .siblings(".filter_content")
            .stop()
            .slideToggle("400", "easeOutQuint");
          e.preventDefault();
        });
    });
    //filter_sub
    $(".sub_group").each(function () {
      $(".sub_filter").hide();
      $(this)
        .find(".sub_filter_title")
        .find('input[type="checkbox"]')
        .off()
        .focus(function (e) {
          $(this)
            .parent()
            .siblings(".sub_filter")
            .stop()
            .slideToggle("400", "easeOutQuint");
          $(this).blur();
          e.preventDefault();
        });
    });
    $(".sub_filter")
      .find('input[type="checkbox"]')
      .focus(function (e) {
        $(this).blur();
      });
    $(".mobile_pop")
      .find("a.btn-close")
      .off()
      .click(function (e) {
        $(".mobile_pop").stop().removeClass("open");
        e.preventDefault();
      });
  }
  //---------------------------------- dropdown setting -----//
  if ($(".dropdown").length > 0) {
    $(".dropdown").each(function () {
      $(this)
        .find(".btn-dropdown")
        .off()
        .click(function (e) {
          $(this)
            .siblings(".dropdown-content")
            .stop(true, true)
            .toggleClass("open");
          $(this).blur();
          e.preventDefault();
        });
    });

    // click document close Dropdown
    function closeDropdown() {
      $(".dropdown-content").stop(true, true).removeClass("open");
    }
    $(document.body).click(function (e) {
      closeDropdown();
    });
    $(".dropdown").click(function (e) {
      e.stopPropagation();
    });
  }
  // 關閉其他action
  $(document).mouseup(function (e) {
    var target = e.target,
      container = $(".dropdown-content");
    if (
      !container.is(e.target) &&
      container.has(e.target).length === 0 &&
      (!$(".dropdown-btn").is(e.target) || !$(".btn-dropdown").is(e.target))
    ) {
      if (
        !(
          ($(".dropdown-btn").is(e.target) ||
            $(".btn-dropdown").is(e.target)) &&
          $(target).siblings(".open").length > 0
        )
      ) {
        container.removeClass("open");
      }
    }
  });
  //---------------------------------- 徵求記錄 查看 -----//
  $(".btn-view").each(function () {
    $(this)
      .off()
      .click(function (e) {
        $(this)
          .parents("tr")
          .next(".description")
          .stop()
          .slideToggle("400", "easeOutQuint");
        e.preventDefault();
      });
  });
  //---------------------------------- action setting -----//
  if ($(".action").length > 0) {
    $(".action").each(function () {
      actionStatus = false;
      $(this)
        .find(".btn-action")
        .off()
        .click(function (e) {
          $(this)
            .siblings(".action-content")
            .stop(true, true)
            .toggleClass("open");
          $(this).blur();
          e.preventDefault();
        });
      $(this).click(function (e) {
        e.stopPropagation();
      });
    });

    // click document close Dropdown
    function closeAction() {
      $(".action-content").stop(true, true).removeClass("open");
    }
    $(document.body).click(function (e) {
      closeAction();
    });
  }
  // 關閉其他action
  $(document).mouseup(function (e) {
    var target = e.target,
      container = $(".action-content");
    if (
      !container.is(e.target) &&
      container.has(e.target).length === 0 &&
      (!$(".action-btn").is(e.target) || !$(".btn-action").is(e.target))
    ) {
      if (
        !(
          ($(".action-btn").is(e.target) || $(".btn-action").is(e.target)) &&
          $(target).siblings(".open").length > 0
        )
      ) {
        container.removeClass("open");
      }
    }
  });
  // btn_filter_condition
  $(".btn_filter_condition")
    .off()
    .click(function (e) {
      // $('.filter_condition').stop().slideToggle('400', 'easeOutQuint');
      $(".filter_condition").stop().toggle();
      $(this).blur();
      e.preventDefault();
    });
  //---------------------------------- form setting -----//
  // form style label動畫
  function _labelAni(obj) {
    var $this = $(obj);
    if ($this.val() != "") $this.addClass("used");
    else $this.removeClass("used");
  }
  // 表單先跑一次偵測有無資料
  $("input").each(function () {
    _labelAni($(this));
  });
  $("textarea").each(function () {
    _labelAni($(this));
  });
  // blur時，跑 label 動畫
  $("input").blur(function () {
    _labelAni($(this));
  });
  $("textarea").blur(function () {
    _labelAni($(this));
  });
  // 如表單驗證後，點選表單取消狀態
  $(".confirm").each(function (index, el) {
    $(this).find("input").addClass("used");
    $(this).find("textarea").addClass("used");
    $(this)
      .find("input")
      .focus(function () {
        $(this).parents(".confirm").removeClass("confirm");
        $(this).parents(".error").removeClass("error");
        $(this).siblings("i").hide();
      });
  });
  // 如表單驗證後，點選表單取消狀態
  $(".error").each(function (index, el) {
    $(this).find("input").addClass("used");
    $(this).find("textarea").addClass("used");
    $(this)
      .find("input")
      .focus(function () {
        $(this).parents(".confirm").removeClass("confirm");
        $(this).parents(".error").removeClass("error");
        $(this).siblings("i").hide();
      });
  });
  // 顯示密碼 toggle
  var passShow = false;
  $(".password_toggle").each(function (index, el) {
    $(this)
      .find(".showPassword a")
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children("i").removeClass().addClass("fas fa-eye");
          $(this)
            .parents(".password_toggle")
            .find('input[type="password"]')
            .attr("type", "text");
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children("i").removeClass().addClass("fas fa-eye-slash");
          $(this)
            .parents(".password_toggle")
            .find('input[type="text"]')
            .attr("type", "password");
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
  //---------------------------------- common setting -----//
  //lazyload
  var lazyLoadInstance = new LazyLoad({
    elements_selector: "img.lazy",
    //placeholder: '/images/basic/placeholder.gif',
    effect: "fadeIn",
    fadeTime: 600,
    threshold: 0,
  });

  //AOS 通用設定
  AOS.init({
    duration: 500, // values from 0 to 3000, with step 50ms
    offset: 200, // offset (in px) from the original trigger point
    easing: "ease-out", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
  });
  window.addEventListener("load", AOS.refresh);

  // mt-news-tab-1
  var resizeTimer1;
  function tabSet() {
    var tab_headerHeight = Math.floor($(".header").outerHeight(true));
    $(".tabs").each(function () {
      var _tab = $(this),
        _tabItem = _tab.find(".tabItem"),
        // _tabItemA = _tabItem.children('a'), //改button後，這行沒有
        _tabContent = _tab.find(".tabContent"),
        tabwidth = _tab.width(),
        tabItemHeight = _tabItem.outerHeight(),
        tabContentHeight = _tab.find(".active").next().innerHeight(),
        tiGap = 0,
        tabItemLength = _tabItem.length,
        tabItemWidth;
      _tab.find(".active").next(".tabContent").show();
      if ($(window).width() >= 768) {
        _tabContent.css("top", tabItemHeight);
        _tab.height(tabContentHeight + tabItemHeight);
        tabItemWidth = (tabwidth - (tabItemLength - 1) * tiGap) / tabItemLength;
        _tabItem.width(tabItemWidth).css("margin-left", tiGap);
        _tabItem.first().css("margin-left", 0);
        _tabItem
          .last()
          .css({
            position: "absolute",
            top: 0,
            right: 0,
          })
          .width(tabItemWidth);
      } else {
        _tab.css("height", "auto");
        _tabItem.width(tabwidth);
        _tabItem.css("margin-left", 0).last().css("position", "relative");
      }
      _tabItem.focus(tabs); //改button後，前面改_tabItem
      _tabItem.click(tabs); //改button後，前面改_tabItem
      function tabs(e) {
        var _tabItemNow = $(this), //改button後，原來$(this).parent(),改$(this)
          tvp = _tab.offset().top,
          tabIndex = _tabItemNow.index() / 2,
          scollDistance = tvp + tabItemHeight * tabIndex - tab_headerHeight;
        _tabItem.removeClass("active");
        _tabItemNow.addClass("active");
        if ($(window).width() <= 767) {
          _tabItem.not(".active").next().slideUp();
          _tabItemNow.next().slideDown();
          $("html,body").stop(true, false).animate({
            scrollTop: scollDistance,
          });
        } else {
          _tabItem.not(".active").next().hide();
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
    $(".tabs>.tabItem:first-child>a").trigger("click");
    tabSet();
  });
  // /*------------------------------------*/
  // ///////table 加上響應式 scroltable-wrapper/////
  // /*------------------------------------*/
  $("table").each(function (index, el) {
    //判斷沒有table_list
    if (
      $(this).parents(".table_list").length == 0 &&
      $(this).parents(".fix_th_table").length == 0 &&
      $(this).parent("form").length == 0
    ) {
      $(this).scroltable();
    }
  });
  // tablearrow arrow，為了設定箭頭
  $(".scroltable-nav-left").append(
    '<div class="tablearrow_left" style="display:none;"></div>'
  );
  $(".scroltable-nav-right").append(
    '<div class="tablearrow_right"  style="display:none;"></div>'
  );
  // 固定版頭
  function table_Arrow() {
    if (
      $("table").parents(".table_list").length == 0 &&
      $("table").parents(".fix_th_table").length == 0 &&
      $(this).parent("form").length == 0
    ) {
      if ($(".scroltable-wrapper").length > 0) {
        var stickyArrowTop = Math.floor($(".scroltable-wrapper").offset().top),
          thisScroll = Math.floor($(this).scrollTop());
        if (thisScroll > stickyArrowTop - 230) {
          $(".scroltable-wrapper .tablearrow_left").css("display", "block");
          $(".scroltable-wrapper .tablearrow_left").css(
            { top: thisScroll - stickyArrowTop + 220 },
            100,
            "easeOutQuint"
          );
          $(".scroltable-wrapper .tablearrow_right").css("display", "block");
          $(".scroltable-wrapper .tablearrow_right").css(
            { top: thisScroll - stickyArrowTop + 220 },
            100,
            "easeOutQuint"
          );
        } else {
          $(".scroltable-wrapper .tablearrow_left").css({
            top: "10px",
            display: "none",
          });
          $(".scroltable-wrapper .tablearrow_right").css({
            top: "10px",
            display: "none",
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
    $(".table_list")
      .find("table")
      .each(function () {
        var $row = $(this).find("tr");
        rowCount = $row.length;
        for (var n = 1; n <= rowCount; n++) {
          $(this)
            .find("th")
            .each(function (index) {
              var thText = $(this).text();
              $row.eq(n).find("td").eq(index).attr("data-title", thText);
            });
        }
      });
  }
  rwdTable();
  //sticky sidebar
  if ($(".left_block").length > 0) {
    var stickyLeft = new StickySidebar(".left_block", {
      containerSelector: ".center_block",
      topSpacing: 0,
      bottomSpacing: 0,
      // containerSelector: '.container',
      // // containerSelector: false,
      innerWrapperSelector: ".sidebar__inner",
      minWidth: 768,
      resizeSensor: true,
    });
    stickyLeft.updateSticky();
  }
  //sticky sidebar === mt-faq
  if ($(".topic_group ").length > 0) {
    var topicSidebar = new StickySidebar(".topic_sidebar", {
      containerSelector: ".topic_fixed",
      innerWrapperSelector: ".topic__inner",
      topSpacing: 80,
      minWidth: 768,
      resizeSensor: true,
      bottomSpacing: 0,
    });
    topicSidebar.updateSticky();
    var topicSidebar2 = new StickySidebar(".topic_sidebar2", {
      containerSelector: ".topic_fixed2",
      innerWrapperSelector: ".topic__inner2",
      topSpacing: 80,
      minWidth: 768,
      resizeSensor: true,
      bottomSpacing: 0,
    });
    topicSidebar2.updateSticky();
  }

  // qa
  $(".lp_qa")
    .find(".qa_content")
    .each(function (index) {
      $(this)
        .find(".q_block")
        .children("a")
        .off()
        .click(function (e) {
          $(".lp_qa").find(".a_block").stop().slideUp("400", "easeOutQuint");
          $(this).parents("li").siblings().find("a").removeClass("open");
          $(this)
            .parents(".topic_group")
            .siblings()
            .find("a")
            .removeClass("open");
          $(this).toggleClass("open");
          $(this)
            .parent(".q_block")
            .siblings(".a_block")
            .stop()
            .slideToggle("400", "easeOutQuint");
          $(this).blur();
          e.preventDefault();
        });
    });
  /*------------------------------------*/
  /////form表單 單個檔案上傳+多個檔案上傳/////
  /*------------------------------------*/
  $(document).on("change", ".check_file", function () {
    var names = [];
    var length = $(this).get(0).files.length;
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
      names.push($(this).get(0).files[i].name);
    }
    // $('input[name=file]').val(names);
    if (length > 2) {
      var fileName = names.join(", ");
      $(this)
        .closest(".upload_grp")
        .find(".upload_file")
        .attr("value", length + " files selected");
    } else {
      $(this).closest(".upload_grp").find(".upload_file").attr("value", names);
    }
  });
  /*-----------------------------*/
  /////     checkbox blur     /////
  /*-----------------------------*/
  $(".check_grp").each(function () {
    $(this)
      .find("label")
      .off()
      .click(function (e) {
        $(this).find('input[type="checkbox"]').blur();
      });
  });
  // effect 遮罩動畫
  $(window).on("load resize scroll", function (e) {
    var window_H = $(window).innerHeight();
    var windowTop = $(window).scrollTop();
    $(".mt-content-list .item .pic").each(function (index, el) {
      // 可以+130 讓圖進入多點再跑動畫
      var imgTop = Math.floor($(this).offset().top - windowTop + 130);
      //imgTop < window_H 是指進入到最底部
      //imgTop>0 是指還沒滾到最上方
      //同時條件成立 代表物件在看得到的地方才會trigger動畫
      if (imgTop < window_H && imgTop > 0) {
        $(this).addClass("effect");
      }
    });
  });
  $(".mice-kv").each(function (index, el) {
    $(this).addClass("effect");
  });
  $(window).on("load resize scroll", function (e) {
    var window_H = $(window).innerHeight();
    var windowTop = $(window).scrollTop();
    $(".mt-discover .item a").each(function (index, el) {
      // 可以+130 讓圖進入多點再跑動畫
      var imgTop = Math.floor($(this).offset().top - windowTop + 130);
      //imgTop < window_H 是指進入到最底部
      //imgTop>0 是指還沒滾到最上方
      //同時條件成立 代表物件在看得到的地方才會trigger動畫
      if (imgTop < window_H && imgTop > 0) {
        $(this).addClass("effect");
      }
    });
  });
  //
  $(".mtCityBgSlider").slick({
    dots: false,
    arrow: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",
    ease: "ease",
  });
  // mt-plan
  //slick
  $(".slider-plan").slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: "ondemand",
    ease: "ease",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  $(".slider-plan").slick("refresh");
  // common slider
  //slick
  $(".commonSlider").slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: "ondemand",
    ease: "ease",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  $(".commonSlider").slick("refresh");

  //------ 書籤蒐藏 如有蒐藏則顯示使用者書簽亮燈 ---------
  var i_bookmark = $("ul .i_bookmark.active");
  function addClass() {
    if (i_bookmark.length > 1) {
      $(".mt-userbar ul li").last().children("a").addClass("hasItem");
    }
  }
  window.onload = addClass();
});
