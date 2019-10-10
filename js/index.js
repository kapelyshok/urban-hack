let bt1=document.getElementById('bt1');
let bt2=document.getElementById('bt2');
let used=1;

let bt_reg=document.getElementById('registration');

//registration.onclick=function(){
	$('#registration').on('click', function() { window.location = 'registration.html'; });
//}




let av=[2,3];
function random(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function timeout(){
	let v=random(0,av.length-1);
	let znach=av[v];
	av.splice(v,1);
	v='images/photo'+znach+'.jpg';
	bt2.src=v;
	av.push(used);used=znach;

}

function my_function(){
	$("#bt2").fadeToggle({duration:2000});
	setTimeout(function(){timeout()},2000);
	$("#bt2").fadeToggle({duration:2000});
}
setInterval(function(){my_function()},5000);

document.getElementById('for_leisure').style.fontSize = $(window).height() * 0.05+'px';
document.getElementById('free').style.fontSize = $(window).height() * 0.05+'px';
document.getElementById('enter').style.fontSize = $(window).height() * 0.05+'px';
document.getElementById('registr').style.fontSize = $(window).height() * 0.05+'px';

window.onresize = function() {
	var w = $(window).width();
	var h = $(window).height();
document.getElementById('for_leisure').style.fontSize = h * 0.05+'px';
	document.getElementById('free').style.fontSize = h * 0.05+'px';
	document.getElementById('enter').style.fontSize = $(window).height() * 0.05+'px';
	document.getElementById('registr').style.fontSize = $(window).height() * 0.05+'px';
}



