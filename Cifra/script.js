//Váriaveis definidas
let linguagem = document.querySelector('#code');
var incrementos = document.getElementById('incremento');
var cod = document.querySelector('#codificar');
var decod = document.getElementById('decodificar');
var botao = document.querySelector('#botao');
var mensagem = document.querySelector('#mensagem');
var popup = document.querySelector('#escuro');
var fechar = document.querySelector('#fechar');

//Mostra e esconde o campo de deslocamento
linguagem.addEventListener("change", function () {
  linguagem.value=="2" ? incremento.style.display = 'none' : incremento.style.display = 'block'
});

//Muda a msg no botao
decod.addEventListener('click',function(){
  botao.innerText = 'Decodificar';
})

cod.addEventListener('click',function(){
  botao.innerText = 'Codificar';
})
//Botão que fecha o popup
fechar.addEventListener('click',function(){
  popup.style.display = 'none';
})

//Variáveis usadas nas funções de criptografar e descriptografar
var maius = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var minus = 'abcdefghijklmnopqrstubwxyz';

var resultado = document.querySelector('#resultado');

//Função codificar césar
function cod1() {
  var mensagemEntrada = mensagem.value;
  var mensagemSaida = "";
  let desl = Number(incremento.value);
  for(var i=0;i<=(mensagemEntrada.length);i++){
    for(var j=0;(j<minus.length);j++){
      var k=0;
      //Verifica se ó caracter é minúsculo
      if (mensagemEntrada.charAt(i)==minus.charAt(j)){
        mensagemSaida += minus.charAt((j + desl)%26); 
        break;
        //Verifica se o caracter é maiúsculo
      } else if (mensagemEntrada.charAt(i)==maius.charAt(j)) {
        mensagemSaida += maius.charAt((j+desl)%26);
        break;
        //Verifica se é um espaço vazio
      } else if (mensagemEntrada.charAt(i)== " ") {
        mensagemSaida += " ";
        break;
      }       
    }
  }
  return mensagemSaida
}
  
//Função codificar base64
function cod2() {
  var mensagemEntrada = mensagem.value;
  var mensagemSaida = "";
  mensagemSaida = btoa(mensagemEntrada);
  return mensagemSaida;
}

//Função decodificar césar
//tive muita dificuldade em aplicar a cifra de cesar e o base 64 e o site esta com alguns problemas mesmo eu tendo buscado ajuda com alguns colegas
function decod1(){
  var mensagemEntrada = mensagem.value;
  var mensagemSaida = "";
  let desl = Number(incremento.value);
  for(var i=0;i<=(mensagemEntrada.length);i++){
    for(var j=0;(j<minus.length);j++){
      //Verifica se o caracter e minúsculo
      if (mensagemEntrada.charAt(i)==minus.charAt(j)){
        mensagemSaida += minus.charAt((j - desl)%26); 
        break;
        //Verifica se o caracter e maiúsculo
      } else if (mensagemEntrada.charAt(i)==maius.charAt(j)) {
        mensagemSaida += maius.charAt((j-desl)%26);
        break;
        //Verifica se é um espaço vazio
      } else if (mensagemEntrada.charAt(i)== " ") {
        mensagemSaida += " ";
        break;
      }
    }
  }
  return mensagemSaida
}
  
//Função decodificar base64  
function decod2(){
  var mensagemEntrada = mensagem.value;
  var mensagemSaida = "";
  mensagemSaida = atob(mensagemEntrada);
  return mensagemSaida;
}

//Evento que chama as funções 
botao.addEventListener('click',function (){
  popup.style.display = 'block';
  
  if (linguagem.value=='1' && cod.checked){ 
    //Cifra de César e Codificar
    resultado.innerText = cod1();
  } else if (linguagem.value=='2' && cod.checked) {
    //Base64 e Codificar
    resultado.innerText = cod2();
  } else if (linguagem.value=='1' && decod.checked) {
    //Cifra de César e Decodificar
    resultado.innerText = decod1();
  } else if (linguagem.value=='2' && decod.checked) {
    //Base64 e Decodificar
    resultado.innerText = decod2();
  } else {
    //Mensagem de erro
    resultado.innerText = 'Erro, tente novamente!';
  }
})