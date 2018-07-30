function(){
	// Initialize Firebase
      var config = {
        apiKey: "AIzaSyCataI_2PU66Ysdp1ThTQii9Z_Vvx0tMsA",
        authDomain: "brainee-facff.firebaseapp.com",
        databaseURL: "https://brainee-facff.firebaseio.com",
        projectId: "brainee-facff",
        storageBucket: "brainee-facff.appspot.com",
        messagingSenderId: "95065608977"
      };
      firebase.initializeApp(config);

      //Pega elementos do textbox pelo ID
      const txtNomeUsuario = document.getElementById('txtNomeUsuario');
      const txtEmailUsuario = document.getElementById('txtEmailUsuario');
      const txtOcupacaoUsuario = document.getElementById('txtOcupacaoUsuario');
      const btnEnviar = document.getElementById('btnEnviar');

      //Adicionar evento de Enviar Formulário
      btnEnviar.addEventListener('click', e => {
      	//Pega dados form
      	const nome = txtNomeUsuario.value;
      	const email = txtEmailUsuario.value;
      	const ocupacao = txtOcupacaoUsuario.value;
      });
}

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}