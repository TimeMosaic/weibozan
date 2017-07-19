
function aclick(i){
	a[i].click();
	if(18 == i){
		alert( "赞完啦！");
	}
}
a=$("a[action-type='fl_like']");


//console.log(a);

cnt = a.length;
if (cnt >= 19) cnt = 19;
for (var i = 0; i < cnt; i++) {
	var r = Math.random();
	setTimeout("aclick(" + i + ")", 4000*i +  2000*r);
}
