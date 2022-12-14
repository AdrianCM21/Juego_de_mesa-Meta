const btn=document.getElementById('btn');
const btn_respuesta=document.getElementById('btn-respuesta')
const coneccion=io();
const caudroPregunta=document.getElementById('pregunta')
let casillaPlayer1=0,casillaPlayer2=0,aux=0,aux2,turno=1,correcto,idPlayer,auxTurno,auxTurno2;
for (let i = 0;  i< 42; i++) {
  document.getElementById('C'+i).disabled=true;
  
}

btn.addEventListener('click',()=>{
  let numeroRandom=(Math.floor(Math.random()*6))+1;
    btn.style.backgroundImage='url(/static/img/L'+numeroRandom+'.png)';
    btn.disabled = true;
    if(turno==1){
      casillaPlayer1=casillaPlayer1+numeroRandom; document.getElementById('C'+casillaPlayer1).style.backgroundColor='#E8FF1C';document.getElementById('C'+casillaPlayer1).disabled=false;;
    }else{ 
      casillaPlayer2=casillaPlayer2+numeroRandom;document.getElementById('C'+casillaPlayer2).style.backgroundColor='#EF2D56';document.getElementById('C'+casillaPlayer2).disabled=false;}
    if(casillaPlayer1>41){Over(1)}
if(casillaPlayer2>41){Over(2)}
})

juego=(id)=>{
  let player=document.getElementById('player'+turno);
  let player2=document.getElementById('player'+(turno==1?2:1));
  let playerc=document.getElementById('C'+(turno==1?casillaPlayer1:casillaPlayer2));
  auxTurno=turno;
  auxTurno2=(turno==1?2:1);
  switch (id) {
    case 1: player.style.right='84vw';player.style.top='81vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 2: player.style.right='75vw';player.style.top='81vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 3: player.style.right='66vw';player.style.top='81vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';player.style.display='none';player2.style.display='none';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 4: player.style.right='57vw';player.style.top='81vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 5: player.style.right='50vw';player.style.top='81vh';aux=1;btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 6: player.style.right='40vw';player.style.top='81vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 7: player.style.right='22vw';player.style.top='81vh';btn.disabled = false;playerc.style.backgroundColor='#fff',(turno==1?casillaPlayer1=casillaPlayer1+1:casillaPlayer2=casillaPlayer2+1);break;
    case 8: player.style.right='22vw';player.style.top='81vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 9: player.style.right='13vw';player.style.top='81vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';player.style.display='none';player2.style.display='none';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 10: player.style.right='13vw';player.style.top='68vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 11: player.style.right='13vw';player.style.top='55vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';player.style.display='none';player2.style.display='none';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 12: player.style.right='22vw';player.style.top='55vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 13: player.style.right='32vw';player.style.top='55vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';player.style.display='none';player2.style.display='none';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 14: player.style.right='40vw';player.style.top='55vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 15: player.style.right='49vw';player.style.top='55vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 16: player.style.right='57vw';player.style.top='55vh';aux=1;btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 17: player.style.right='66vw';player.style.top='55vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 18: player.style.right='75vw';player.style.top='55vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';player.style.display='none';player2.style.display='none';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 19: player.style.right='84vw';player.style.top='55vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 20: player.style.right='93vw';player.style.top='42vh';btn.disabled = false;playerc.style.backgroundColor='#fff';(turno==1?casillaPlayer1=casillaPlayer1+1:casillaPlayer2=casillaPlayer2+1);break;
    case 21: player.style.right='93vw';player.style.top='42vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 22: player.style.right='93vw';player.style.top='29vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';player.style.display='none';player2.style.display='none';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 23: player.style.right='84vw';player.style.top='29vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 24: player.style.right='75vw';player.style.top='29vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 25: player.style.right='57vw';player.style.top='29vh';btn.disabled = false;playerc.style.backgroundColor='#fff';(turno==1?casillaPlayer1=casillaPlayer1+1:casillaPlayer2=casillaPlayer2+1);break;
    case 26: player.style.right='57vw';player.style.top='29vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 27: player.style.right='49vw';player.style.top='29vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 28: player.style.right='40vw';player.style.top='29vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';player.style.display='none';player2.style.display='none';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 29: player.style.right='32vw';player.style.top='29vh';aux=1;btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 30: player.style.right='22vw';player.style.top='29vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 31: player.style.right='13vw';player.style.top='29vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 32: player.style.right='13vw';player.style.top='16vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 33: player.style.right='13vw';player.style.top='4vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';player.style.display='none';player2.style.display='none';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 34: player.style.right='22vw';player.style.top='4vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 35: player.style.right='32vw';player.style.top='4vh';aux=1;btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 36: player.style.right='40vw';player.style.top='4vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 37: player.style.right='57vw';player.style.top='4vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 38: player.style.right='57vw';player.style.top='4vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 39: player.style.right='66vw';player.style.top='4vh';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 40: player.style.right='75vw';player.style.top='4vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';player.style.display='none';player2.style.display='none';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
    case 41: player.style.right='84vw';player.style.top='4vh'
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';player.style.display='none';player2.style.display='none';btn.disabled = false;playerc.style.backgroundColor='#fff';break;
  }
  if(aux){aux=0;}else{turno=(turno==1?2:1)};
  coneccion.on('cliente',(per)=>{
    document.getElementById('pregunta-principal').innerHTML=per[1];
    document.getElementById('texto-respuesta1').innerHTML=per[2]; document.getElementById('res1').value=per[2];
    document.getElementById('texto-respuesta2').innerHTML=per[3]; document.getElementById('res2').value=per[3];
    document.getElementById('texto-respuesta3').innerHTML=per[4]; document.getElementById('res3').value=per[4];
    correcto=per[5];idPlayer=id;
})
}
btn_respuesta.addEventListener('click',()=>{
  for (let a = 1; a < 4; a++) {
    if(document.getElementById('res'+a).checked){aux2=a;document.getElementById('res'+a).checked=false}
  }
  let player=document.getElementById('player'+auxTurno);
  let player2=document.getElementById('player'+auxTurno2);
  if(document.getElementById('res'+aux2).value==correcto){
    switch (idPlayer) {
      case 3: player.style.display='block';player2.style.display='block';player.style.right='40vw';player.style.top='81vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1+3:casillaPlayer2=casillaPlayer2+3);break;
      case 9:player.style.display='block';player2.style.display='block';player.style.right='22vw';player.style.top='55vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1+3:casillaPlayer2=casillaPlayer2+3);break;
      case 11:player.style.display='block';player2.style.display='block';player.style.right='40vw';player.style.top='55vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1+3:casillaPlayer2=casillaPlayer2+3);break;
      case 13:player.style.display='block';player2.style.display='block';player.style.right='49vw';player.style.top='55vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1+2:casillaPlayer2=casillaPlayer2+2);break;
      case 18:player.style.display='block';player2.style.display='block';player.style.right='84vw';player.style.top='55vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1+1:casillaPlayer2=casillaPlayer2+1);break;
      case 22:player.style.display='block';player2.style.display='block';player.style.right='75vw';player.style.top='29vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1+2:casillaPlayer2=casillaPlayer2+2);break;
      case 28:player.style.display='block';player2.style.display='block';player.style.right='22vw';player.style.top='29vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1+2:casillaPlayer2=casillaPlayer2+2);break;
      case 33:player.style.display='block';player2.style.display='block';player.style.right='22vw';player.style.top='4vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1+1:casillaPlayer2=casillaPlayer2+1);break;
      case 40:player.style.display='block';player2.style.display='block';player.style.right='66vw';player.style.top='4vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1-1:casillaPlayer2=casillaPlayer2-1);break;
      case 41:player.style.display='block';player2.style.display='block';player.style.right='66vw';player.style.top='4vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1-2:casillaPlayer2=casillaPlayer2-2);break;
      default:
        break;
    }

}else{
     switch (idPlayer) {
      case 3: player.style.display='block';player2.style.display='block';player.style.right='93vw';player.style.top='81vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1-3:casillaPlayer2=casillaPlayer2-3);break;
      case 9:player.style.display='block';player2.style.display='block';player.style.right='40vw';player.style.top='81vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1-3:casillaPlayer2=casillaPlayer2-3);break;
      case 11:player.style.display='block';player2.style.display='block';player.style.right='22vw';player.style.top='81vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1-3:casillaPlayer2=casillaPlayer2-3);break;
      case 13:player.style.display='block';player2.style.display='block';player.style.right='13vw';player.style.top='68vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1-3:casillaPlayer2=casillaPlayer2-3);break;
      case 18:player.style.display='block';player2.style.display='block';player.style.right='49vw';player.style.top='55vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1-3:casillaPlayer2=casillaPlayer2-3);break;
      case 22:player.style.display='block';player2.style.display='block';player.style.right='84vw';player.style.top='55vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1-3:casillaPlayer2=casillaPlayer2-3);break;
      case 28:player.style.display='block';player2.style.display='block';player.style.right='57vw';player.style.top='29vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1-2:casillaPlayer2=casillaPlayer2-2);break;
      case 33:player.style.display='block';player2.style.display='block';player.style.right='57vw';player.style.top='29vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=casillaPlayer1-3:casillaPlayer2=casillaPlayer2-3);break;
      case 40:player.style.display='block';player2.style.display='block';player.style.right='93vw';player.style.top='81vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=0:casillaPlayer2=0);break;
      case 41:player.style.display='block';player2.style.display='block';player.style.right='93vw';player.style.top='81vh';caudroPregunta.style.display='none';(turno==2? casillaPlayer1=0:casillaPlayer2=0);break;
      default:
        break;
    }

}
});
function Over(id){
 const ganador= document.getElementById('ganador');
 ganador.style.display='flex';
 ganador.style.background=(id==1?'#E8FF1C':'#EF2D56');
 ganador.innerHTML=`Jugador ${id} WIIIINNNNNNN!!!` ;
 casillaPlayer1=0,casillaPlayer2=0,aux=0,aux2,turno=1
}
