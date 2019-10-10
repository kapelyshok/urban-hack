let bt1=document.getElementById('bt1');
let bt2=document.getElementById('bt2');
let used=1;

let bt_reg=document.getElementById('registration');

//registration.onclick=function(){
	$('#registration').on('click', function() { window.location = 'file:///D:/urban-hack/registration.html'; });
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
