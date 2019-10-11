let bt1=document.getElementById('bt1');
let bt2=document.getElementById('bt2');
let used=1;
let registration_button=document.getElementById('registration_button');
let bt_reg=document.getElementById('registration');

//registration.onclick=function(){
	$('#registration_button').on('click', function() { window.location = 'registration.html'; });
//}


let podkladka=document.getElementById('podkladka');

let av=[2,3,4];
function random(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}







//document.getElementById('enter').style.fontSize = $(window).height() * 0.05+'px';
//document.getElementById('registr').style.fontSize = $(window).height() * 0.05+'px';

window.onresize = function() {
	var w = $(window).width();
	var h = $(window).height();
//document.getElementById('for_leisure').style.fontSize = h * 0.05+'px';
	//document.getElementById('free').style.fontSize = h * 0.05+'px';
	//document.getElementById('enter').style.fontSize = $(window).height() * 0.05+'px';
	//document.getElementById('registr').style.fontSize = $(window).height() * 0.05+'px';
}

