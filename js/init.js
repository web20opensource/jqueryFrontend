/*--------------------------------------
 * Image Loader Init
---------------------------------------*/
$(document).ready(function () {
	$('.fajl2').imageLoader({
		'show': '.passs'
	});

	 $("body").on('click',".passs",function(){
        $(".passs").draggable({ containment: "parent" }).resizable({containment: "parent"});
    });
});
