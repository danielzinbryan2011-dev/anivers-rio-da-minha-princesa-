function abrirSite(){

let entrada = document.getElementById("entrada");

let site = document.getElementById("site");


entrada.style.opacity="0";


setTimeout(()=>{

entrada.style.display="none";

site.classList.remove("escondido");


},1000);


}





function voltarInicio(){

location.reload();

}





/* CONTADOR */


let inicio = new Date("2025-11-02");



function atualizarContador(){


let agora = new Date();


let tempo = agora - inicio;



let dias = Math.floor(
tempo/(1000*60*60*24)
);



let horas = Math.floor(
(tempo/(1000*60*60))%24
);



let minutos = Math.floor(
(tempo/(1000*60))%60
);



document.getElementById("contador").innerHTML =

dias+" dias 🤍 "+horas+" horas 🤍 "+minutos+" minutos";


}



setInterval(atualizarContador,1000);

atualizarContador();






/* CARTA */


function abrirCarta(){


let carta=document.querySelector(".envelope");


carta.classList.toggle("aberto");


}







/* CORAÇÕES */


function criarCoracao(){


let coracao=document.createElement("div");


coracao.innerHTML="🤍";


coracao.className="coracao";



coracao.style.left=Math.random()*100+"vw";



coracao.style.animationDuration=

(Math.random()*4+3)+"s";



document.body.appendChild(coracao);



setTimeout(()=>{

coracao.remove();

},7000);



}



setInterval(criarCoracao,500);









/* ESTRELAS */


function criarEstrela(){


let estrela=document.createElement("div");


estrela.innerHTML="✦";


estrela.className="estrela";



estrela.style.left=Math.random()*100+"vw";

estrela.style.top=Math.random()*100+"vh";

estrela.style.animationDuration=

(Math.random()*3+2)+"s";



document.body.appendChild(estrela);



setTimeout(()=>{

estrela.remove();

},5000);



}



setInterval(criarEstrela,700);