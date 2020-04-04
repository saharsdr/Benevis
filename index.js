// var name1=document.getElementById("name");

var message=document.getElementById('msg');

var btn=document.getElementById('btn');

var divy=document.getElementById('khas');

var icons=document.getElementsByClassName('fa');
var main=document.getElementsByClassName('container');

function showme(indexy){
  divy.innerHTML="<p class='note'>"+localStorage[indexy]+"</p>"+divy.innerHTML;
  console.log(localStorage[indexy]);
}

btn.addEventListener('click',function(){
  var i= window.localStorage.length;
  
  if(message.value===""){
    ;
    console.log("it is nothhing");
  }
  else{
    localStorage.setItem(i+1,message.value);
    showme(i+1);
    goto();
  }

  message.value="";
  
});

function goto(){

  icons[0].className+=" active";
  icons[1].className=icons[1].className.replace(" active","");
   
  main[1].className+=" unact";
  main[0].className=main[0].className.replace(" unact","");
  
}


for(var i=0,x=localStorage.length;i<x;i++){
    showme(i+1);
}

for(var i=0;i<icons.length;i++){
  icons[i].addEventListener('click',function(){
    var current=document.getElementsByClassName('active');
    for(var j=0;j<icons.length;j++){
      icons[j].className+=" active";
      main[j].className+=" unact";
    }
    this.className=this.className.replace(" active","");
    this.className=this.className.replace(" active","");
    console.log(i);
    if(icons[0].className===this.className)
    {
      main[1].className=main[1].className.replace(" unact","");
      main[1].className=main[1].className.replace(" unact","");
    }
    else{
      main[0].className=main[0].className.replace(" unact","");
      main[0].className=main[0].className.replace(" unact","");
    }
  });
}

