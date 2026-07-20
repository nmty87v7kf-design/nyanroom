$("#menubtn").click(function () {
	$(this).toggleClass('active');
    $("#drawer-nav").toggleClass('panelactive');
    $("#drawer-bg").toggleClass('circleactive');
});

$("#drawer-nav a").click(function () {
    $("#menubtn").removeClass('active');
    $("#drawer-nav").removeClass('panelactive');
    $("#drawer-bg").removeClass('circleactive');
});