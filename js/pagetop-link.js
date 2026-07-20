function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 500){//陦ｨ遉ｺ縺輔ｌ繧九せ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ霍晞屬
		$('#page-top').removeClass('DownMove');
		$('#page-top').addClass('UpMove');
	}else{
		if($('#page-top').hasClass('UpMove')){
			$('#page-top').removeClass('UpMove');
			$('#page-top').addClass('DownMove');
		}
	}
}


$(window).scroll(function () {
	PageTopAnime();
});


$('#page-top').click(function () {
	var scroll = $(window).scrollTop(); 
	if(scroll > 0){
		$(this).addClass('floatAnime');
        $('body,html').animate({
            scrollTop: 0
        }, 2000,function(){//2000莉･荳翫↓縺吶ｋ縺ｨ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺碁≦縺上↑繧�
            $('#page-top').removeClass('floatAnime');
        });	
	}
    return false;
});