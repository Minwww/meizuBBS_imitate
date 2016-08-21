$(document).ready(function(){
    //登录窗口鼠标滑过效果
	var timerLogin = null;
	$('.login-box').hover(function(){
		$('.login-box s').show().siblings('.not-login-sub').show();

	},function(){
		timer = setTimeout(function(){
			$('.login-box s').hide().siblings('.not-login-sub').hide();
		},500)
	});

	//鼠标滑过产品显示
	$('.header-product').hover(function(){	
		var num = $(this).index();
		$('.sub-wrap').eq(num-1).stop().slideDown(500).siblings().hide();
		},function(){
			$('.sub-wrap').hide();
	});

	//轮播图

	var num = 0;
	var liWidth = $('.roll-img li').width();
	var timer = null;


	function auto(){ //自动轮播
		num++;
		if(num == 3)num = 0;
		$('.shequ-roll').animate({
			marginLeft: '-' + (liWidth + 28)*num +'px', 
		},500);
		$('.roll_title a').eq(num).fadeIn(0).siblings().fadeOut(0);
		$('.roll_small_pic img').eq(num).css('opacity','1').siblings().css('opacity','0.2');
	}
	auto();

	timer = setInterval(auto,6000); //定时效果


	$('.shequ-roll').hover(function(){
		$(this).find('.roll_opacity').show();
		$(this).find('.roll_small').show();
	},function(){
		$(this).find('.roll_opacity').hide();
		$(this).find('.roll_small').hide();
	},function(){
	});


//切换
$('.firmware_tabs .tabs_title li').mouseover(function(){
	$(this).addClass('cur').siblings().removeClass('cur');
	$('.firmware_tabs .tabs_info li').eq($(this).index()).show().siblings().hide();
})

$('.contact .tabs_title li').mouseover(function(){
	$(this).addClass('cur').siblings().removeClass('cur');
	$('.contact .tabs_info li').eq($(this).index()).show().siblings().hide();
})


//回到顶部
function goTop(){
	var WinHeight = $(window).height();  //可视窗口高度
	var GoHeight = $(document).scrollTop(); //页面显示高度
	if (WinHeight < GoHeight){
		 	$('#gotop').show();
		 	
		}else{
			$('#gotop').hide();
		}
}
//当页面滚动到特定位置发生函数
 $(window).scroll(function(){ 
        goTop();
    });

$('#gotop').click(function(){ //点击返回到顶部
	$('html, body').animate({
		scrollTop:'0',
	},500);
})




})