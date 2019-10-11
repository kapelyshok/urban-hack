var winH = $(window).height();
var winW = $(window).width();
document.getElementById('main').style.marginTop = winH/2 -300 + 'px';
document.getElementById('main').style.marginLeft = winW/2- 250 +'px';

window.onresize = function(){
	var winH = $(window).height();
	var winW = $(window).width();
	document.getElementById('main').style.marginTop = winH/2 -300  +'px';
	document.getElementById('main').style.marginLeft = winW/2 -250+'px';
}


// <div class="main" style="font-family: sans-serif;">
//  		<div class="signup">
//  			<div style="text-align: center; font-size: 40px; font-style: bold;margin-bottom: 20px;"><b>Реєстрація</b></div>
//  			<div><p class="text1">ПІБ</p><input type="text" class="text2" /></div>
//  			<div><p class="text1">EMAIL</p><input type="text" class="text2" /></div>
//  			<div><p class="text1">Пароль</p><input type="password" class="text2" /></div>
//  			<div><p class="text1">Підтвердіть свій пароль</p><input type="password" class="text2" /></div>
//  			<div><p class="text1">Телефон</p><input type="text" class="text2" /></div>
//  			<div>
//  				<form><p class="text1">Напрямок</p>
//  					<input list="direction" style="width: 45%;">
//  					<datalist id="direction">
//  					<option>Музика</option>
//  					<option>Освіта</option>
//  					<option>Мистецтво</option>
//  					<option>Спорт</option>
//  					<option>Хореографія</option>
//  				</datalist>
//  			</form>
//  			</div>
//  			<div>
//  				<form><p class="text1">Категорія</p>
//  					<input list="category" style="width: 45%;">
//  					<datalist id="category">
//  					<option>Музика</option>
//  					<option>Освіта</option>
//  					<option>Мистецтво</option>
//  					<option>Спорт</option>
//  					<option>Хореографія</option>
//  				</datalist>
//  			</form>
//  			</div>
//  			<div><p class="text1">Безкоштовно</p><input type=check class="text2" /></div>
//  		</div>
//  	</div>
