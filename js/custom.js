//Menu js Start
//.ready start
$(document).ready(function() {
    jQuery(window).load(function() {
        var colorcode = document.cookie;
        if (colorcode != "") {
            var cname = "colorcssfile";
            var name = cname + "=";
            var cssname = '';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) {
                    cssname = c.substring(name.length, c.length);
                }
            }

            if (cssname != '') {
                var new_style = 'css/' + cssname + '.css';
                $('#theme-change').attr('href', new_style);
            }
        } 
    });
    
    //Portfolio
    jQuery("#grid").mixitup({
        filterSelector: ".filter-item"
    });
    jQuery(".filter-item").on("click", function(e) {
        e.preventDefault()
    });
    //Goto Top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".totop").fadeIn()
        } else {
            $(".totop").fadeOut()
        }
    });
    $(".totop").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false
    });
    //Color Change Script
    $('.colorchange').on("click", function() {
        var name = $(this).attr('id');
        var new_style = 'css/' + name + '.css';
        $('#theme-change').attr('href', new_style);
    });
    $("#style-switcher .bottom a.settings").on("click", function(e) {
        e.preventDefault();
        var div = $("#style-switcher");
        if (div.css("left") === "-155px") {
            $("#style-switcher").animate({
                left: "0px"
            });
        } else {
            $("#style-switcher").animate({
                left: "-155px"
            });
        }
    });
    //Skills Charts
    var circle1 = Circles.create({
        id: 'circles-1',
        value: 80,
        radius: 100,
        number: 80,
        text: '80%',
        width: 7,
        colors: ["#ddd", "#94bb54"],
        duration: 900
    });
    var circle2 = Circles.create({
        id: 'circles-2',
        value: 50,
        radius: 100,
        number: 50,
        text: '50%',
        width: 7,
        colors: ["#ddd", "#333"],
        duration: 900
    });
    var circle3 = Circles.create({
        id: 'circles-3',
        value: 70,
        radius: 100,
        number: 70,
        text: '70%',
        width: 7,
        colors: ["#ddd", "#94bb54"],
        duration: 900
    });
    var circle4 = Circles.create({
        id: 'circles-4',
        value: 40,
        radius: 100,
        number: 40,
        text: '40%',
        width: 7,
        colors: ["#ddd", "#333"],
        duration: 900
    });
    //Counter 
    $('.appear-count').appear(function() {
        $('.count').countTo();
    });
    //Parallax 
    $('#intro').parallax("50%", 0.1);
    $('#second').parallax("50%", 0.1);
    $('#eco_new_home').parallax("50%", 0.1);
    //Accordion 
    $("#accordion").accordion();
    //Toggle
    $(".eco_toggle_container").hide();
    $("h2.eco_trigger").on("click", function() {
        $(this).toggleClass("active").next().slideToggle("slow");
    });
    //Pretty Photo
    $("area[data-gal^='prettyPhoto']").prettyPhoto();
    $(".gallery a[data-gal^='prettyPhoto']").prettyPhoto({
        animation_speed: "normal",
        theme: "light_square",
        slideshow: 3000,
		autoplay_slideshow: true
    });
    //Search Icon
    $('.eco_search a i').on("click", function() {
        $('.eco_search_form').slideToggle();
    });
    //Revolution Slider For Main Home Page Slider		
    var tpj=jQuery;
			
			var revapi1066;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_1066_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_1066_1");
				}else{
					revapi1066 = tpj("#rev_slider_1066_1").show().revolution({
						sliderType:"standard",
jsFileLocation:"revolution/js/",
						sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[868,768,960,720],
						lazyType:"none",
						parallax: {
							type:"mouse",
							origo:"slidercenter",
							speed:2000,
							levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
							type:"mouse",
							disable_onmobile:"on"
						},
						shadow:0,
						spinner:"off",
						stopLoop:"on",
						stopAfterLoops:0,
						stopAtSlide:1,
						shuffle:"off",
						autoHeight:"off",
						fullScreenAutoWidth:"off",
						fullScreenAlignForce:"off",
						fullScreenOffsetContainer: ".header",
						fullScreenOffset: "60px",
						disableProgressBar:"on",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			});	/*ready*/

// Revolution Slider For Full Screen Slider and Tranparent menu Page 
  var t=jQuery;
      
      var revapi1058;
          if(t("#rev_slider_1058_1").revolution == undefined){
              revslider_showDoubleJqueryError("#rev_slider_1058_1");
          }else{
              revapi1058 = t("#rev_slider_1058_1").show().revolution({
                  sliderType:"hero",
                  jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
                  sliderLayout:"fullscreen",
                  dottedOverlay:"none",
                  delay:9000,
                  navigation: {
                  },
                  responsiveLevels:[1240,1024,778,480],
                  visibilityLevels:[1240,1024,778,480],
                  gridwidth:[1240,1024,778,480],
                  gridheight:[868,768,960,720],
                  lazyType:"none",
                  parallax: {
                      type:"scroll",
                      origo:"slidercenter",
                      speed:1000,
                      levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                      type:"scroll",
                  },
                  shadow:0,
                  spinner:"spinner2",
                  autoHeight:"off",
                  fullScreenAutoWidth:"off",
                  fullScreenAlignForce:"off",
                  fullScreenOffsetContainer: "",
                  fullScreenOffset: "60",
                  disableProgressBar:"on",
                  hideThumbsOnMobile:"off",
                  hideSliderAtLimit:0,
                  hideCaptionAtLimit:0,
                  hideAllCaptionAtLilmit:0,
                  debugMode:false,
                  fallbacks: {
                      simplifyAll:"off",
                      disableFocusListener:false,
                  }
              });
          }
          
          
  //catalogue page slider
  
  var tpj=jQuery;
      
      var revapi484;
      tpj(document).ready(function() {
          if(tpj("#rev_slider_484_1").revolution == undefined){
              revslider_showDoubleJqueryError("#rev_slider_484_1");
          }else{
              revapi484 = tpj("#rev_slider_484_1").show().revolution({
                  sliderType:"standard",
jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
                  sliderLayout:"fullscreen",
                  dottedOverlay:"none",
                  delay:9000,
                  navigation: {
                      keyboardNavigation:"off",
                      keyboard_direction: "horizontal",
                      mouseScrollNavigation:"off",
                      mouseScrollReverse:"default",
                      onHoverStop:"off",
                      touch:{
                          touchenabled:"on",
                          swipe_threshold: 75,
                          swipe_min_touches: 1,
                          swipe_direction: "horizontal",
                          drag_block_vertical: false
                      }
                  },
                  responsiveLevels:[1240,1024,778,480],
                  visibilityLevels:[1240,1024,778,480],
                  gridwidth:[1240,1024,778,480],
                  gridheight:[900,768,960,720],
                  lazyType:"single",
                  parallax: {
                      type:"mouse",
                      origo:"slidercenter",
                      speed:300,
                      levels:[2,4,6,8,10,12,14,16,18,20,22,24,49,50,51,55],
                      type:"mouse",
                  },
                  shadow:0,
                  spinner:"spinner2",
                  stopLoop:"on",
                  stopAfterLoops:0,
                  stopAtSlide:1,
                  shuffle:"off",
                  autoHeight:"off",
                  fullScreenAutoWidth:"off",
                  fullScreenAlignForce:"off",
                  fullScreenOffsetContainer: "",
                  fullScreenOffset: "",
                  disableProgressBar:"on",
                  hideThumbsOnMobile:"off",
                  hideSliderAtLimit:0,
                  hideCaptionAtLimit:0,
                  hideAllCaptionAtLilmit:0,
                  debugMode:false,
                  fallbacks: {
                      simplifyAll:"off",
                      nextSlideOnWindowFocus:"off",
                      disableFocusListener:false,
                  }
              });
          }
      }); /*ready*/
//Revolution Slider For Main Home Page Slider		
var tpj=jQuery;
            
var revapi1059;
tpj(document).ready(function() {
    if(tpj("#rev_slider_1059_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_1059_1");
    }else{
        revapi1059 = tpj("#rev_slider_1059_1").show().revolution({
            sliderType:"standard",
jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"off",
                touch:{
                    touchenabled:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:800,
                    style:"zeus",
                    hide_onleave:false,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:30,
                    space:5,
                    tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
                }
            },
            responsiveLevels:[1240,1024,778,480],
            visibilityLevels:[1240,1024,778,480],
            gridwidth:[1240,1024,778,480],
            gridheight:[868,768,960,720],
            lazyType:"none",
            parallax: {
                type:"scroll",
                origo:"slidercenter",
                speed:1000,
                levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,100,55],
                type:"scroll",
            },
            shadow:0,
            spinner:"off",
            stopLoop:"on",
            stopAfterLoops:0,
            stopAtSlide:1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "60px",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }
}); /*ready*/
    //contact form submition
    $("#em_submit").on("click", function() {
        var e = $("#uname").val();
        var t = $("#umail").val();
        var n = $("#subj").val();
        var r = $("#msg").val();
        $.ajax({
            type: "POST",
            url: "ajaxmail.php",
            data: {
                username: e,
                useremail: t,
                useresubject: n,
                mesg: r
            },
            success: function(n) {
                var i = n.split("#");
                if (i[0] == "1") {
                    $("#uname").val("");
                    $("#umail").val("");
                    $("#subj").val("");
                    $("#msg").val("");
                    $("#err").html(i[1])
                } else {
                    $("#uname").val(e);
                    $("#umail").val(t);
                    $("#subj").val(t);
                    $("#msg").val(r);
                    $("#err").html(i[1])
                }
            }
        })
    });
    //preloader
    $("#status").fadeOut();
    $("#preloader").delay(300).fadeOut("slow")
    //preloader end
}); //ready

//Bx slider For Companies Slider
$(document).ready(function(){
    jQuery('.slider4').bxSlider({
        slideWidth: 400,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        slideMargin: 1,
        controls: false,
        pager: false,
        auto: true
    });
});