const btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
  let numeroRandom=(Math.floor(Math.random()*6))+1;
    btn.style.backgroundImage='url(/static/img/L'+numeroRandom+'.png)';     
  console.log(numeroRandom);
})