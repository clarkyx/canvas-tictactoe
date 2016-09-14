var player = 1
var wincondition = [0,0,0,0,0,0,0,0,0];
function init(){
  var c = document.getElementById("playboard");
  var ctx = c.getContext("2d")
  ctx.fillStyle="#ffffff";
  ctx.fillRect(0,0,300,300);
  ctx.moveTo(100,0);
  ctx.lineTo(100,300);
  ctx.stroke();
  ctx.moveTo(200,0);
  ctx.lineTo(200,300);
  ctx.stroke();
  ctx.moveTo(0,100);
  ctx.lineTo(300,100);
  ctx.stroke();
  ctx.moveTo(0,200);
  ctx.lineTo(300,200);
  ctx.stroke();
  c.addEventListener("click", onClick, false);
};

function onClick(e){
  bxy = drawconditioncheck(e.pageX, e.pageY, player);
  bx = bxy[0]
  by = bxy[1]
  if(bx != 500 && by != 500){
    if(player == 1){
      drawX(bx,by);
      setTimeout(checkwin, 1000, wincondition);
      player++;
    }else if (player == 2){
      drawO(bx,by);
      setTimeout(checkwin,1000,wincondition);
      player--;
    };
  };
};

function drawconditioncheck(x,y){
  if(x > 0 && x < 100){
    if(y > 0 && y < 100){
      if(setcondition(0)){
        return [0,0];
      }
      return [500,500];
    }else if (y > 100 && y < 200) {
      if(setcondition(3)){
        return [0,100];
      }
      return [500,500];
    }else if (y > 200 && y < 300) {
      if(setcondition(6)){
        return [0,200];
      }
    }
    return [500,500];
  }else if (x > 100 && x < 200) {
    if(y > 0 && y < 100){
      if(setcondition(1)){
        return [100,0];
      }
      return [500,500];
    }else if (y > 100 && y < 200) {
      if(setcondition(4)){
        return [100,100];
      }
      return [500,500];
    }else if (y > 200 && y < 300) {
      if(setcondition(7)){
        return [100,200];
      }
      return [500,500];
    }
  }else if (x > 200 && x < 300) {
    if(y > 0 && y < 100){
      if(setcondition(2)){
        return [200,0];
      }
      return [500,500];
    }else if (y > 100 && y < 200) {
      if(setcondition(5)){
        return [200,100];
      }
      return [500,500];
    }else if (y > 200 && y < 300) {
      if(setcondition(8)){
        return [200,200];
      }
      return [500,500];
    }
  }
}

function setcondition(number){
  if(player == 1 && wincondition[number] == 0){
    wincondition[number] = 1;
    return true;
  }else if (player == 2 && wincondition[number] == 0) {
    wincondition[number] = 2;
    return true;
  }else {
    return false;
  };
};

function checkdisable(number){
  if(number > 0){
    return false;
  }else{
    return true;
  };
};

function drawX(coordx, coordy){
  var c = document.getElementById("playboard");
  var ctx = c.getContext("2d")
  ctx.moveTo(coordx,coordy);
  ctx.lineTo(coordx + 100, coordy + 100);
  ctx.stroke();
  ctx.moveTo(coordx + 100,coordy);
  ctx.lineTo(coordx, coordy + 100);
  ctx.stroke();
};

function drawO(coordx, coordy){
  var c = document.getElementById("playboard");
  var ctx = c.getContext("2d")
  ctx.beginPath();
  ctx.arc(coordx+50, coordy+50, 45, 0, Math.PI*2);
  ctx.stroke();
};

function checkwin(array){
  if((wincondition[0]==1 && wincondition[3]==1 && wincondition[6]==1) ||
     (wincondition[1]==1 && wincondition[4]==1 && wincondition[7]==1) ||
     (wincondition[2]==1 && wincondition[5]==1 && wincondition[8]==1) ||
     (wincondition[0]==1 && wincondition[4]==1 && wincondition[8]==1) ||
     (wincondition[6]==1 && wincondition[7]==1 && wincondition[8]==1) ||
     (wincondition[3]==1 && wincondition[4]==1 && wincondition[5]==1) ||
     (wincondition[0]==1 && wincondition[1]==1 && wincondition[2]==1) ||
     (wincondition[2]==1 && wincondition[4]==1 && wincondition[6]==1)){
       alert("player 1 won!");
       clear();
     }else if ((wincondition[0]==2 && wincondition[3]==2 && wincondition[6]==2) ||
        (wincondition[1]==2 && wincondition[4]==2 && wincondition[7]==2) ||
        (wincondition[2]==2 && wincondition[5]==2 && wincondition[8]==2) ||
        (wincondition[0]==2 && wincondition[4]==2 && wincondition[8]==2) ||
        (wincondition[6]==2 && wincondition[7]==2 && wincondition[8]==2) ||
        (wincondition[3]==2 && wincondition[4]==2 && wincondition[5]==2) ||
        (wincondition[0]==2 && wincondition[1]==2 && wincondition[2]==2) ||
        (wincondition[2]==2 && wincondition[4]==2 && wincondition[6]==2)){
          alert("player 2 won!");
          clear();
     };
};

function clear(){
  window.location.reload(false);
}

init();
