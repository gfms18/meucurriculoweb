function carregarpagina(){
    rootElement = document.getElementById('paginainicial');

    rootElement.innerHTML = `
        <section class="descricao">
                    
            <h2>Gabriel <span>Felipe</span></h2>
            <h3>PERNAMBUCO * <span>(81) 98756-6301 * zfgabriel8810@gmail.com</span></h3><!--span serviu para diferenciar na hora de estilizar o texto-->
            <p>Olá, sou estudante de Análise e desenvolvimento de sistemas pelo <span>IFPE</span>, estou me desenvolvendo como um programador Web. Este é meu portifolio, se quiser me conhecer mais entre em contato comigo!</p>
            <div class="social-icons">
                <h3 class="h3midia">Estas são minhas <span>mídias sociais. </span> </h3>
                <a href="https://api.whatsapp.com/send?phone=5581987566301"><i class="fab fa-whatsapp"></i></a>
                <a class="linkedin" href="https://www.linkedin.com/in/gabriel-felipe-0562a9213/"><i class="fab fa-linkedin-in"></i></a><!--para acessar o linkedin dentro de social icons, dei uma classe ao "a", pois a classe que tem nome separada nao consegui acessar-->
                <a class="instagram" href="https://www.instagram.com/domgabf/"><i class="fab fa-instagram"></i></a><!--com o instagram eu fiz o mesmo-->
                <a class="github" href="https://github.com/gfms18"><i class="fab fa-github"></i></a>
            </div><!--social-ícons-->
        </section>
    
    
    `
}

function botaosobre(){
    rootElement.innerHTML = `
    <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Sobre mim
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          Sou Gabriel Felipe Marques dos Santos, sou pernambucano, Brasileiro, tenho 19 anos e estou em constante aprendizado em desenvolvimento web. Meu hobbie é fazer estilização de sistes e praticar musica. Sou de Pernambuco e busco oportunidades para me aperfeiçoar na área de tecnologia.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          O que busco?
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        Busco sempre evoluir como estudante, profissional e pessoa. Sou comunicativo, sou bom em trabalho em equipe e gosto de fazer com que todos ao meu redor se sintam bem. Busco sempre inovar e melhorar a experiencia do usuário, pois nossos produtos finais sempre são destinados a ele.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Onde estudei
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        Atualmente sou graduando em Analise e Desenvolvimento pelo Instituto Federal de Pernambuco (IFPE), Campus Jaboatão dos Guararapes.
        <p>Ensino Médio: EREM Pasto José Florencio Rodrigues</p>
        </div>
      </div>
    </div>
  </div>
    
    
    `
}

function botaoexperiencia(){
    rootElement.innerHTML = `
    <div class="container">
    <div class="row align-items-start">
      <div class="col">
        <div class="card">
            <div class="organizar"><img src="projetosortear1.png" class="card-img-top" alt="..."></div>
          <div class="card-body">
          <h5 class="card-title">Sortenumer</h5>
          <p class="card-text">Site com objetivo de sortear um numero entre dois valores, um minimo e um máximo, feito em HTML, CSS e Javascript.</p>
          <a href="https://gfms18.github.io/sortenumer/" class="btn btn-primary">Visitar</a>
          </div>
      </div>
      </div>
      <div class="col">
        <div class="card">
        <div class="organizar"><img src="login1.png" class="card-img-top" alt="..."></div>
          <div class="card-body">
          <h5 class="card-title">Login</h5>
          <p class="card-text">Este site de cadastro simula login em algum sistema, feito em HMTL e css.</p>
          <a href="https://gfms18.github.io/login/" class="btn btn-primary">Visitar</a>
          </div>
      </div>
      </div>
      <div class="col">
        <div class="card">
        <div class="organizar"><img src="jabv.png" class="card-img-top" alt="..."></div>
          <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Este é o Jabtyper, um site que testa sua cadencia de digitação e apresenta frases com dificuldades diferentes de acordo com sua escolha! Feito em HTML, CSS, Javascript e localstorage.</p>
          <a href="https://gfms18.github.io/JabTyper-v2/" class="btn btn-primary">Visitar</a>
          </div>
      </div>
      </div>
    </div>
    
  </div>


  
    
    
 
    `
}


function botaoformacao(){
  rootElement.innerHTML = `
  <div class="list-group">
    
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h2 class="mb-1">Ensino superior: 3° período</h2>
          <small class="text-muted">cursando</small>
        </div>
        <p class="mb-1">Instituição: IFPE Campus Jaboatão</p>
        <p class="mb-1">Curso: Análise e Desenvolvimento de Sistemas</p>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h2 class="mb-1">Ensino Médio</h2>
          <small class="text-muted">Completo</small>
        </div>
        <p class="mb-1">Instituição: EREM Pastor José Florêncio Rodrigues</p>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h2 class="mb-1">Intercambio</h2>
          <small class="text-muted">2019.1</small>
        </div>
        <h5 class="mb-1">Espanha</h5>
        <p class="mb-1">Governo de Pernambuco</p>
        <p class="mb-1">Instituição: Camilo Jose Cela - Málaga</p>
      </a>

      <a href="#" class="list-group-item list-group-item-action" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h2 class="mb-1">Habilidades</h2>
          <small class="text-muted">Atualizado em: 24/07/2021</small>
        </div>
        <div style="width: 30%; margin-left: 15px;">
          <h2><i class="fab fa-js-square" style="margin-right: 10px;"></i>Javascript</h2>
          <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h2><i class="fab fa-html5" style="margin-right: 10px;"></i>HTML</h2>
          <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 35%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h2><i class="fab fa-css3-alt" style="margin-right: 10px"></i>CSS</h2>
          <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" style="width: 30%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h2><i class="fab fa-python" style="margin-right: 10px;"></i>Python</h2>
          <div class="progress">
            <div class="progress-bar bg-indigo" role="progressbar" style="width: 20%; background-color: background-color: rgb(4, 0, 255);" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h2><i class="fab fa-bootstrap" style="margin-right: 10px;"></i>Bootstrap</h2>
          <div class="progress">
            <div class="progress-bar bg-indigo" role="progressbar" style="width: 20%; background-color: rgb(255, 0, 221);" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </a>

</div>
  `
}