
//var e=document.getElementById("app").children[0].children[5].children[3].children[0].children[1].children[1]
online=[0,5,3,0,1,1]
send=[0,5,3,0,6,0,2]
txt=[0,5,3,0,6,0,1,0,1]
aa=""
tx=prompt("enter message you want to send or leave blank");

function getc(ta,chi){
    var temp=ta
   var i
    for(i=0;i<chi.length;i++){
        
        temp=temp.children[chi[i]]
        //console.log(temp+" "+chi[i])
    }
    
    return temp
    
}
tag_app=document.getElementById("app")
function get_status(){
    var s=getc(tag_app,online)
    var cnt =s.childElementCount

    if(cnt==2){
        var txt=s.children[1].children[0].innerText
        if(txt=="online"){

        
        return true
        }
    }
    else{
        return false
    }
}
function clk(){

    getc(tag_app,[0,5,3,0,6,0,2,0]).click()
}
function set_text(tx){
    aa=getc(tag_app,txt)
    if(get_status()){
    aa.innerHTML=tx
    }
    
}

function role(){
    set_text(tx)
    
 }


var c=getc(tag_app,online)
c.addEventListener("DOMSubtreeModified",role)

setInterval(()=>{
    if(aa!="" && get_status()){
        aa.dispatchEvent(new InputEvent('input',{bubbles:true}))
        clk()
        aa="";
    }
},1000)
  
 
