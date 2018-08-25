$(document).ready(function(){
  prof=["Developer","Thinker","Artist","Architect","Designer","Researcher"];
  var j=0;
  function swap(){
    j++;
    if (j>prof.length*2-1){
      clearInterval(x);
      j=0;
      return;
    }
    console.log(prof);
    if(prof[0][0] == "A"){
     $("#prof-word").html("n&nbsp" + prof[0]);
    }
    else {
      $("#prof-word").html("&nbsp" + prof[0]);
    }
    var temp= prof[0];
    prof.shift();
    prof.push(temp);
    var x = setTimeout(swap, 20);
  }
  var y = setInterval (swap, 1500);
});
