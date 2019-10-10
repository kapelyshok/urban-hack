let bt1=document.getElementById('bt1');
let bt2=document.getElementById('bt2');
let used=1;
/*bt1.onclick=function()
{
	//$("body > *").animate({width:'100px'},3000);
	
}
bt2.onclick=function()
{
	$("body > *").animate({width:'0px',fontSize:"0px",height:"0px"},2000);
	$("#bt2").hide();
}*/
let av=[2,3];
function random(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function timeout(){
	let v=random(0,av.length-1);
	let znach=av[v];
	av.splice(v,1);
	v='photo'+znach+'.jpg';
	bt2.src=v;
	av.push(used);used=znach;
}

function my_function(){
	$("#bt2").fadeToggle({duration:2000});
	setTimeout(function(){timeout()},2000);
	$("#bt2").fadeToggle({duration:2000});
}
setInterval(function(){my_function()},5000);
