var abcd=prompt("message  to send  everytime they are online [leave blank if u dont want]");
	function call(){
	var y=document.getElementsByClassName("_3AwwN")[0];
	var x=y.children[1].childElementCount;
	var s=y.children[1].children[1].children[0].innerText
	 if(x ==2&&s=="online"){
	if(count==0){
	var date = new Date();
	var abc=date.getHours() + ":" +date.getMinutes();
	console.log(abc);
	
	count=1;
	var inner=document.getElementsByClassName("_2S1VP copyable-text selectable-text")[0];
	inner.innerHTML=abcd;
	inner.dispatchEvent(new InputEvent('input',{bubbles:true}))
	var hello=document.getElementsByClassName("_3oju3")[0];
	hello.lastChild.click();
	}
	}
	else{
	count=0;
	}
	}var count=0;
	setInterval(call,2000);

