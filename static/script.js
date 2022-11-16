const btn=document.getElementById('btn');
const btn_respuesta=document.getElementById('btn-respuesta')
const coneccion=io();
const caudroPregunta=document.getElementById('pregunta')
let casillaPlayer1=0,aux=0,aux2,casillaAnterior1=0,turno=1,correcto,idPlayer;
btn.addEventListener('click',()=>{
  let numeroRandom=(Math.floor(Math.random()*6))+1;
    btn.style.backgroundImage='url(/static/img/L'+numeroRandom+'.png)';
    // btn.disabled = true;
    casillaPlayer1=casillaPlayer1+numeroRandom;
    // document.getElementById('C'+casillaPlayer1).style.backgroundColor='#14CC67';
    // document.getElementById('C'+casillaAnterior1).style.backgroundColor='#fff';
    casillaAnterior1=casillaAnterior1+numeroRandom;
})

juego=(id)=>{
  let player=document.getElementById('player'+turno);
  auxTurno=turno;
  switch (id) {
    case 1: player.style.right='84vw';player.style.top='81vh';player.disabled=true;break;
    case 2: player.style.right='75vw';player.style.top='81vh';break;
    case 3: player.style.right='66vw';player.style.top='81vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';break;
    case 4: player.style.right='57vw';player.style.top='81vh';break;
    case 5: player.style.right='50vw';player.style.top='81vh';aux=1;break;
    case 6: player.style.right='40vw';player.style.top='81vh';break;
    case 8: player.style.right='22vw';player.style.top='81vh';break;
    case 9: player.style.right='13vw';player.style.top='81vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';break;
    case 10: player.style.right='13vw';player.style.top='68vh';break;
    case 12: player.style.right='22vw';player.style.top='55vh';break;
    case 13: player.style.right='32vw';player.style.top='55vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';break;
    case 14: player.style.right='40vw';player.style.top='55vh';break;
    case 15: player.style.right='49vw';player.style.top='55vh';break;
    case 16: player.style.right='57vw';player.style.top='55vh';aux=1;break;
    case 17: player.style.right='66vw';player.style.top='55vh';break;
    case 18: player.style.right='75vw';player.style.top='55vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';break;
    case 19: player.style.right='84vw';player.style.top='55vh';break;
    case 21: player.style.right='93vw';player.style.top='42vh';break;
    case 22: player.style.right='93vw';player.style.top='29vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';break;
    case 23: player.style.right='84vw';player.style.top='29vh';break;
    case 24: player.style.right='75vw';player.style.top='29vh';break;
    case 26: player.style.right='57vw';player.style.top='29vh';break;
    case 27: player.style.right='49vw';player.style.top='29vh';break;
    case 28: player.style.right='40vw';player.style.top='29vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';break;
    case 29: player.style.right='32vw';player.style.top='29vh';aux=1;break;
    case 30: player.style.right='22vw';player.style.top='29vh';break;
    case 32: player.style.right='13vw';player.style.top='16vh';break;
    case 33: player.style.right='13vw';player.style.top='4vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';break;
    case 34: player.style.right='22vw';player.style.top='4vh';break;
    case 35: player.style.right='32vw';player.style.top='4vh';aux=1;break;
    case 36: player.style.right='40vw';player.style.top='4vh';break;
    case 38: player.style.right='57vw';player.style.top='4vh';break;
    case 39: player.style.right='66vw';player.style.top='4vh';break;
    case 40: player.style.right='75vw';player.style.top='4vh'; 
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';break;
    case 41: player.style.right='84vw';player.style.top='4vh'
    coneccion.emit('servidor',id);
    caudroPregunta.style.display='flex';break;
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
  if(document.getElementById('res'+aux2).value==correcto){
    switch (idPlayer) {
      case 3: player.style.right='40vw';player.style.top='81vh';caudroPregunta.style.display='none';break;
      case 9:player.style.right='22vw';player.style.top='55vh';caudroPregunta.style.display='none';break;
      case 13:player.style.right='49vw';player.style.top='55vh';caudroPregunta.style.display='none';break;
      case 18:player.style.right='84vw';player.style.top='55vh';caudroPregunta.style.display='none';break;
      case 22:player.style.right='75vw';player.style.top='29vh';caudroPregunta.style.display='none';break;
      case 28:player.style.right='22vw';player.style.top='29vh';caudroPregunta.style.display='none';break;
      case 33:player.style.right='22vw';player.style.top='4vh';caudroPregunta.style.display='none';break;
      case 40:player.style.right='66vw';player.style.top='4vh';caudroPregunta.style.display='none';break;
      case 41:player.style.right='66vw';player.style.top='4vh';caudroPregunta.style.display='none';break;
      default:
        break;
    }

}else{
     switch (idPlayer) {
      case 3: player.style.right='93vw';player.style.top='81vh';caudroPregunta.style.display='none';break;
      case 9:player.style.right='40vw';player.style.top='81vh';caudroPregunta.style.display='none';break;
      case 13:player.style.right='13vw';player.style.top='68vh';caudroPregunta.style.display='none';break;
      case 18:player.style.right='49vw';player.style.top='55vh';caudroPregunta.style.display='none';break;
      case 22:player.style.right='84vw';player.style.top='55vh';caudroPregunta.style.display='none';break;
      case 28:player.style.right='57vw';player.style.top='29vh';caudroPregunta.style.display='none';break;
      case 33:player.style.right='57vw';player.style.top='29vh';caudroPregunta.style.display='none';break;
      case 40:player.style.right='93vw';player.style.top='81vh';caudroPregunta.style.display='none';break;
      case 41:player.style.right='93vw';player.style.top='81vh';caudroPregunta.style.display='none';break;
      default:
        break;
    }

}
})

