<?php
	include ("header.html")
?>
    <div class="container">

      <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">Título mais longo para um post destacado</h1>
          <p class="lead my-3">Várias linhas formando uma introdução, informando novos leitores rápido e eficientemente sobre o que é mais interessante, neste post.</p>
          <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue lendo...</a></p>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col-md-9">
          <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <img class="imagemPost" src="img/meeting.jpg">
              <h3 class="mb-0">
                <a class="text-dark" href="#">Consultoria de Negócios</a>
              </h3>
              <div class="mb-1 text-muted">Postado dia 31/07/2018</div>
              <p class="card-text mb-auto">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
              <a href="#">Continue lendo...</a>
            </div>
          </div>
          
          <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <img class="imagemPost" src="img/casual-meeting.jpg">
              <h3 class="mb-0">
                <a class="text-dark" href="#">Sua Startup do Zero</a>
              </h3>
              <div class="mb-1 text-muted">Postado dia 30/07/2018</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#">Continue lendo...</a>
            </div>
          </div>

          <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <img class="imagemPost" src="img/dicas-de-empreendedorismo.jpeg">
              <h3 class="mb-0">
                <a class="text-dark" href="pages/primeiroPost.html">Como ter um mindset empreendedor?</a>
              </h3>
              <div class="mb-1 text-muted">Postado por Bruna Moraes, dia 31/07/2018</div>
              <p class="card-text mb-auto">Primeiro, você deve estar se perguntando o que significa mindset, palavra que está tão em alta ultimamente.  Se você é aquilo que você pensa, porque não programar o seu pensamento para alcançar o sucesso? Mindset é a sua mente configurada, e neste caso, para o empreendedorismo.
              Empreender não é fácil e pode ficar ainda mais complicado se tiver aquela voz dentro de você dizendo que não é capaz.</p>
              <a href="pages/primeiroPost.html">Continue lendo...</a>
            </div>
          </div>

        </div>
        <div class="col-md-3">
          <div class="card card-add flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <!--TODO: VALIDAR FORM -->
              <form id="contactForm">
                <div class="form-group">
                  <strong><label class="styleLabel">Preenchimento do formulário de contato</label></strong>
                </div>
                <div class="form-group">
                  <label>Nome completo:</label>
                  <input type="text" class="form-control" id="txtNomeUsuario" placeholder="Informe seu nome">
                </div>
                <div class="form-group">
                  <label>Email:</label>
                  <input type="email" class="form-control" id="txtEmailUsuario" placeholder="Informe seu email">
                </div>
                <div class="form-group">
                  <label>Ocupação:</label>
                  <input type="text" class="form-control" id="txtOcupacaoUsuario" placeholder="Informe sua ocupação">
                </div>
                <div class="form-group form-check">
                </div>
                <button type="submit" id="btnEnviar" class="btn card-button">Enviar</button>
              </form>
            </div>
          </div>

          <div class="card mb-4 shadow-sm h-md-250">
            <div class="sideMenu">
                <h3 class="mb-0">
                    <a class="text-white" href="#">Últimos Posts</a>
                </h3>  
            </div> 
            <div class="card-body d-flex flex-column align-items-start">             
              <ul>
              <li><a href="blog/como-ter-um-mindset_empreendedor.php">Como ter um mindset empreendedor?</a></li>
                <li><a class="customLink" href="blog/#">Consultoria de Negócios</a></li>
                <li><a href="#">Sua Startup do Zero</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>


  <?php
    include ("footer.html")
  ?>