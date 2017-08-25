
function aclick(i){
	// close confirm dialog
	if($("a[action-type='ok']").length > 0){
		$("a[action-type='ok']")[0].click();
	}
	a[i].click();
	if(k == i){
		alert( "赞完啦！");
	}
}
a=$("a[action-type='fl_like']");

//console.log(a);
cnt = a.length;
if (cnt >= 20) cnt = 20;
j = 0; // count for praised comments
k = 0; //last one index
for (var i = 0; i < cnt; i++) {
	if($(a[i]).children('span').children('span').children('span').hasClass('UI_ani_praised')){
		j ++;
		continue;
	}else{
		k = i;
		var r = Math.random();
		setTimeout("aclick(" + i + ")", 4000*(i-j) +  2000*r);
	}
}
