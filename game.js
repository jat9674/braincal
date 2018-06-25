        
	var maxscore=0;	
	var universalcounter=0;
	var n = 0;
var count=0;
var score=0;
/*var seconds=15;*/
$(document).ready(function(){
$("#about").click(function(){
score=0;
$("#quote").show(1500);
$("#instruct").hide();
        $("#hidden").hide();
		$("#Score").hide();
		$("#life").hide();
	    $("#maxscore").hide();
	    $("#gameover").hide();
		 	document.getElementById("Score").innerHTML="SCORE : 0" ;
					score=0;
					count=0;
					unicount=0;
					n=2;
      // $("#countdown").show(2500);
					 document.getElementById("life5").style.color="red";
					 	 document.getElementById("life4").style.color="red";
						 	 document.getElementById("life3").style.color="red";
							 	 document.getElementById("life2").style.color="red";
								 	 document.getElementById("life1").style.color="red";
});
});
	 $(document).ready(function(){
    $("#show").click(function(){
	
	/*seconds=10;
	universalcounter=universalcounter+1;
	setInterval( function(){
	 var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0"
		+ remainingSeconds;  
		document.getElementById("countdown").style.color="red";
    }
    document.getElementById('countdown').innerHTML = "TIME REMAINING:" + remainingSeconds;
    if (seconds == 0) {
	  $("#gameover").show(1500);
	   $("#hidden").hide(2000);
		$("#Score").hide(2000);
		$("#life").hide(2000);
		$("#quote").hide(2500);
	  document.getElementById("life1").style.color="red";
		  document.getElementById("life2").style.color="red";
		   document.getElementById("life3").style.color="red";
		    document.getElementById("life4").style.color="red";
			 document.getElementById("life5").style.color="red";
 score=0;
 unicount=0;
 n=2;
 $("#countdown").hide(2000);
			 	document.getElementById("Score").innerHTML="SCORE : 0" ;
				clearinterval(seconds);
    } 
	else {
		
        seconds--;
    }
	},1000*universalcounter);*/
				 	document.getElementById("Score").innerHTML="SCORE : 0" ;
					score=0;
					count=0;
					unicount=0;
					n=2;
      // $("#countdown").show(2500);
					 document.getElementById("life5").style.color="red";
					 	 document.getElementById("life4").style.color="red";
						 	 document.getElementById("life3").style.color="red";
							 	 document.getElementById("life2").style.color="red";
								 	 document.getElementById("life1").style.color="red";
	$("#gameover").hide();
        $("#hidden").show(2500);
		$("#Score").show(2500);
		$("#life").show(2500);
		$("#quote").hide(2000);
		$("#instruct").hide(2000);
		$("#maxscore").hide();
	 //document.getElementById("countdown").style.color="white" ;
		
    });
});
$(document).ready(function(){

$("#instruction").click(function(){
$("#instruct").show(2000);
        $("#hidden").hide(2500);
		$("#Score").hide(2500);
		$("#life").hide(2500);
		$("#quote").hide(2000);
	    $("#maxscore").hide();
	    $("#gameover").hide();
		 	document.getElementById("Score").innerHTML="SCORE : 0" ;
					score=0;
					count=0;
					unicount=0;
					n=2;
      // $("#countdown").show(2500);
					 document.getElementById("life5").style.color="red";
					 	 document.getElementById("life4").style.color="red";
						 	 document.getElementById("life3").style.color="red";
							 	 document.getElementById("life2").style.color="red";
								 	 document.getElementById("life1").style.color="red";
				//$("#countdown").hide(2500);
				
					// document.getElementById("countdown").style.color="white" ;
});
});
$(document).ready(function(){
$("#max").click(function(){
$("#maxscore").show();
$("#gameover").hide();
        $("#hidden").hide(2500);
		$("#Score").hide(2500);
		$("#life").hide(2500);
		$("#quote").hide(2000);
		$("#instruct").hide(2000);
		 	document.getElementById("Score").innerHTML="SCORE : 0" ;
					score=0;
					count=0;
					unicount=0;
					n=2;
      // $("#countdown").show(2500);
					 document.getElementById("life5").style.color="red";
					 	 document.getElementById("life4").style.color="red";
						 	 document.getElementById("life3").style.color="red";
							 	 document.getElementById("life2").style.color="red";
								 	 document.getElementById("life1").style.color="red";
		//$("#countdown").hide(2500);
		
		//document.getElementById("countdown").style.color="white" ;
		});
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
   document.getElementById("hidden").style.display="none";

var unicount=0;
 

function randomNumberRange(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}
var a = '' ;  
var x = ['*','-','+'];
n=2; 
for(var i=0;i<n;i++){
    if(i !== n-1){
        var n1 = randomNumberRange(1, 40);
        var m = randomNumberRange(0, x.length);
        var str = x[m];
        a += n1;
        a +=' '+str+' ';
    }else{
	 var n1 = randomNumberRange(1, 40);
        a += n1;
    }  
	document.getElementById("input").value=a;
}
	 document.getElementById("check").onclick=function(){
seconds=15;
    if(Math.floor(eval(a))==document.getElementById("output").value)
	{
	unicount=unicount+1;
	
	if(unicount<4)
	{	 
	
	score+=50;
 x = ['*','-','+','/'];
n=2;
}
 
	if(unicount>=4&&unicount<10)
	{ 
	score+=150;
	x = ['*','-','+','/'];
n=3;
	}
	if(unicount<14&&unicount>=10){
		 
 x = ['*','-','+','/'];
n=4;
	score+=500;
	}
	if(unicount>14){
		 
 x = ['*','-','+'];
n=5;
	score+=1000;
	}
	 if(maxscore<score)
	 {
			 maxscore=score;
			 document.getElementById("maximum").innerHTML="MAXSCORE : " + score;
			 }
	document.getElementById("Score").innerHTML="SCORE:" + score;
	document.getElementById("finalscore").innerHTML=document.getElementById("Score").innerHTML;
 	a='';
	for(var i=0;i<n;i++){
    if(i !== n-1){
        var n1 = randomNumberRange(1, 40);
        var m = randomNumberRange(0, x.length);
        var str = x[m];
        a += n1;
        a +=' '+str+' ';
    }else{
	 var n1 = randomNumberRange(1, 40);
        a += n1;
    }  
	document.getElementById("input").value=a;
	document.getElementById("output").value="";
}
}
	else{
	
 count=count+1;
  if(document.getElementById("output").value=="")
	 {
	
	 if(count%5==1)
	 {
	  alert("skip");
	 document.getElementById("life5").style.color="white";
	 }
	  if(count%5==2)
	 {
	  alert("skip");
	 document.getElementById("life4").style.color="white";
	 }
	  if(count%5==3)
	 {
	  alert("skip");
	 document.getElementById("life3").style.color="white";
	 }
	  if(count%5==4)
	 {
	  alert("skip");
	 document.getElementById("life2").style.color="white";
	 }
	  
	 if(count%5==0)
	 {
	 $("#gameover").show(1500);
	   $("#hidden").hide(2000);
		$("#Score").hide(2000);
		$("#life").hide(2000);
		$("#quote").hide(2500);
	  document.getElementById("life1").style.color="red";
		  document.getElementById("life2").style.color="red";
		   document.getElementById("life3").style.color="red";
		    document.getElementById("life4").style.color="red";
			 document.getElementById("life5").style.color="red";
 score=0;
 unicount=0;
 n=2;
 //$("#countdown").hide(2000);
			 	document.getElementById("Score").innerHTML="SCORE : 0" ;
	 
	 }
	 
	 
	 
	 }
	 else{
	 if(count%5==1)
	 {
	 document.getElementById("life5").style.color="white";
	 alert("Wrong answer");
	 }
	  if(count%5==2)
	 {
	 document.getElementById("life4").style.color="white";
	 alert("Wrong answer");
	 }
	  if(count%5==3)
	 {
	 document.getElementById("life3").style.color="white";
	 alert("Wrong answer");
	 }
	  if(count%5==4)
	 {
	 document.getElementById("life2").style.color="white";
	 alert("Wrong answer");
	 }
	  
	 if(count%5==0)
	 {
 $("#gameover").show(1500);
	   $("#hidden").hide(2000);
		$("#Score").hide(2000);
		$("#life").hide(2000);
		$("#quote").hide(2500);
	  document.getElementById("life1").style.color="red";
		  document.getElementById("life2").style.color="red";
		   document.getElementById("life3").style.color="red";
		    document.getElementById("life4").style.color="red";
			 document.getElementById("life5").style.color="red";
			  
			 	document.getElementById("Score").innerHTML="SCORE : 0"; 
	  score=0;
	  unicount=0;
	  n=2;
	 // $("#countdown").hide(2000);
	 }
	 }
 
	document.getElementById("correct").innerHTML="CORRECT ANSWER :" + eval(a);
		$('#correct').delay(500).show(100);
	a='';
	for(var i=0;i<n;i++){
    if(i !== n-1){
        var n1 = randomNumberRange(1, 40);
        var m = randomNumberRange(0, x.length);
        var str = x[m];
        a += n1;
        a +=' '+str+' ';
    }
	else{
	 var n1 = randomNumberRange(1, 40);
        a += n1;
    }  
	document.getElementById("input").value=a;
		document.getElementById("output").value="";
		if(document.getElementById("output").value=="")
		{ 
		$('#correct').delay(500).hide(100);
		}
		 
}
	}
	}
  