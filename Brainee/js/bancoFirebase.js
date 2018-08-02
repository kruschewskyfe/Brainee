// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAiYlgWW5j03haswCQuW1qUiy7R5ytxl_w",
    authDomain: "brainee-9ee17.firebaseapp.com",
    databaseURL: "https://brainee-9ee17.firebaseio.com",
    projectId: "brainee-9ee17",
    storageBucket: "brainee-9ee17.appspot.com",
    messagingSenderId: "516855679444"
  };
  firebase.initializeApp(config);
 

//Referenciando usuarios collection
var usuariosRef = firebase.database().ref();

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

//Submit form
function submitForm(e){
  e.preventDefault();

  var nome = document.getElementById('txtNomeUsuario').value;
  var email = document.getElementById('txtEmailUsuario').value;
  var ocupacao = document.getElementById('txtOcupacaoUsuario').value;

  if(document.getElementById("txtNomeUsuario").value == ""){
    alert('Por favor, preencha o campo nome');
    document.getElementById("txtNomeUsuario").focus();
    return false
  }
  else if(!validaEmail(email)){
    alert('Favor informar um email válido!');
  }
  else if(document.getElementById("txtOcupacaoUsuario").value == ""){
    alert('Por favor, preencha o campo ocupação');
    document.getElementById("txtOcupacaoUsuario").focus();
    return false
  }
  else{
    //save user
        saveUser(nome,email,ocupacao,validaEmailB2B(email),moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss"),getIp());

        //Reseta form
        var form = document.querySelector("#contactForm");
        form.reset();
        
        //alert('Muito obrigado! Seus dados foram salvos.');
        window.location.href = "http://brainee.com.br/obrigado.php";
  }
}


//Função para pegar valores do form
function getInputVal(id){
  return document.getElementById(id).value;
}

//Salva o form para o firebase
function saveUser(nome,email,ocupacao,tipo,datahora,ip){
  var novoUsuarioRef = usuariosRef.push();
  novoUsuarioRef.set({
    nome: nome,
    email: email,
    ocupacao: ocupacao,
    datahora: datahora,
    ip: ip,
    tipo: tipo
  });
}




//Função para conseguir o IP
function getIp() {
  //inicializo a classe de requisições
  const xhr = new XMLHttpRequest();
  //defino o metodo a ser utilizado (get/post/put/patch/delete)
  const method = 'GET';
  //defino a url que sera utilizada na minah requisição
  const url = 'https://ipapi.co/json/';
  //inicializo a requisição passando o metodo e a url e afirmo que minha requisição sera SINCRONA utilizando o false
  xhr.open(method, url, false)
  //executo a requisição configurada acima
  xhr.send();

  //verifico o estado da reposta dada pela api, o estado 200 caracteriza uma resposta correta
  //caso a resposta seja correta (200) então eu prossigo com meu codigo e retorno o ip
  if(xhr.status == 200) {
    //transformo a resposta que veio com o formato de texto
    const respostaJson = JSON.parse(xhr.response);
    //acesso a propriedade ip e adiciono ele na div
    return respostaJson.ip;
  }
  //caso tenha algum erro na api retorno a mensagem de erro
  return 'ERRO: Ocorreu algum problema com nossa api';
}

console.log(getIp());
console.log(moment().tz("America/Sao_Paulo").format());



//Função para validar email
function validaEmail(email){
    var str = email;
    var filtro = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(filtro.test(str)) {
        return true;
    } 
    else {
        return false;
    }
}

//Função Regex para o nome
function validarNome(nome) {
   let nomeValido = nome.trim().match(/^[a-zA-ZáÁãÃéÉêÊíÍõÕôÔúÚçÇ][a-zA-ZáÁãÃéÉêÊíÍõÕôÔúÚçÇ]+([ ][a-zA-ZáÁãÃéÉêÊíÍõÕôÔúÚçÇ]+)*([ ][a-zA-ZáÁãÃéÉêÊíÍõÕôÔúÚçÇ][a-zA-ZáÁãÃéÉêÊíÍõÕôÔúÚçÇ]+)+([ ][a-zA-ZáÁãÃéÉêÊíÍõÕôÔúÚçÇ]+)*$/);
   if (nomeValido) {
       return true;
   } else {
       return false;
   }
}

//Função para validar Ocupação
function validarOcupacao(ocupacao) {
    let nomeValido = ocupacao;
    if(nomeValido.trim().match(/^[a-zA-ZáÁãÃéÉêÊíÍõÕôÔúÚçÇ][a-zA-ZáÁãÃéÉêÊíÍõÕôÔúÚçÇ]*$/) || nomeValido.trim().match(/^[a-zA-ZáÁãÃéÉêÊíÍõÕôÔúÚçÇ][a-zA-ZáÁãÃéÉêÊíÍõÕôÔúÚçÇ]+([ ][a-zA-ZáÁãÃéÉêÊíÍõÕôÔúÚçÇ]+)*([ ][a-zA-ZáÁãÃéÉêÊíÍõÕôÔúÚçÇ]+)*$/))
    if (nomeValido) {
        return true;
    } else {
        return false;
    }
}


//Para validar email B2B
function validaEmailB2B(email){
  var emailCorp = ["gmail.com","hotmail.com","uol.com.br","terra.com.br","outlook.com.br","live.com"];

  var separador = "@";
  var emailB2B = email.split(separador);

  var splitEmail = emailB2B[1];

  var tipo = 'B2B';

  for(i = 0; i < emailCorp.length;i++){
    if(splitEmail === emailCorp[i])
      tipo = 'B2C';
  }
  return tipo;   
}
