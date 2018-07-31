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

  //Pega os valores
  if (!validarNome(txtNomeUsuario.value))
    alert('Favor informar seu nome completo e válido!');
  else{
    if(!validaEmail(txtEmailUsuario.value))
    {
      alert('Favor informar um email válido!');
    }
    else{
      if(!validarOcupacao(txtOcupacaoUsuario.value))
      {
        alert('Favor informar uma ocupação válida!');   
      }
      else{
        var nome = getInputVal('txtNomeUsuario');
        var email = getInputVal('txtEmailUsuario');
        var ocupacao = getInputVal('txtOcupacaoUsuario');
      }
    }
  }

  //save user
  saveUser(nome,email,ocupacao);
  alert('Muito obrigado! Seus dados foram salvos.');
}

//Função para pegar valores do form
function getInputVal(id){
  return document.getElementById(id).value;
}

//Salva o form para o firebase
function saveUser(nome,email,ocupacao,datahora,ip){
  var timestamp = new Date().getTime();
  var novoUsuarioRef = usuariosRef.push();
  novoUsuarioRef.set({
    nome: nome,
    email: email,
    ocupacao: ocupacao,
    datahora: timestamp,
    ip: getIp()
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




//Função para validar email
function validaEmail(email){
    var str = email;
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(filtro.test(str)) {
        return true;
    } 
    else {
        return false;
    }
}

//Função Regex para o nome
function validarNome(nome) {
    let nomeValido = nome.trim().match(/^[a-zA-ZáÁéÉ][a-zA-ZáÁéÉ]+([ ][a-zA-ZáÁéÉ]+)*([ ][a-zA-ZáÁéÉ][a-zA-ZáÁéÉ]+)+([ ][a-zA-ZáÁéÉ]+)*$/);
    if (nomeValido) {
        return true;
    } else {
        return false;
    }
}

//Função para validar Ocupação
/*function validarOcupacao(ocupacao) {
    let nomeValido = ocupacao.trim().match(/^[a-zA-ZáÁéÉ][a-zA-ZáÁéÉ]*$/);
    if (nomeValido) {
        return true;
    } else {
        return false;
    }
}*/

function validarOcupacao(ocupacao) {
    let nomeValido = ocupacao;
    if(nomeValido.trim().match(/^[a-zA-ZáÁéÉ][a-zA-ZáÁéÉ]*$/) || nomeValido.trim().match(/^[a-zA-ZáÁéÉ][a-zA-ZáÁéÉ]+([ ][a-zA-ZáÁéÉ]+)*$/))
    if (nomeValido) {
        return true;
    } else {
        return false;
    }
}