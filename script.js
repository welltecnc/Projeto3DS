//DECLARANDO AS VARIAVEIS
let p1=prompt("Digite seu NOME");
let p2=prompt("Digite um PODER que gostaria de ter");
let p3=prompt("digite o nome de um VILAO");
let p4=prompt("Digite um LUGAR que gostaria de estar");
let msg=document.getElementById("msg");

msg.innerHTML=`<p>Ola, ${p1} o seu poder é ${p2} e você vai enfrentar o(a)${p3} e vai esta no(em) ${p4}`
