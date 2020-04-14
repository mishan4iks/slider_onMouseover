document.getElementById("carusel_block").onmouseover=f;
var f=0;

function f(){
	var c=document.getElementById('carusel_block');
	f=f-500;
	if (f<-6500) {
		f=0;
	}
	c.style.left=f+"px";
	c.style.transition="2s";
}
function prev(){
	var c=document.getElementById('carusel_block');
	f=f+500;
	if (f>0) {
		f=0;
	}
	c.style.left=f+"px";
	c.style.transition="2s";
}
function next(){
	var c=document.getElementById('carusel_block');
	f=f-500;
	if (f<-6500) {
		f=-6500;
	}
	c.style.left=f+"px";
	c.style.transition="2s";
}