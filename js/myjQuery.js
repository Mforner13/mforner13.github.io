$(document).ready(function(){
	$(this).find("ul.dropdown-menu").hide();
	$("li.drpdwn-menu").hover(function(){
		$(this).find("ul.dropdown-menu").show(100);
	}, function() {
		$(this).find("ul.dropdown-menu").hide(300);
	});
	$("a.menu-link").hover(function(){
		$(this).css("color", "#304155");
	}, function() {
		$(this).css("color", "#e6f3ff");
	});
});

