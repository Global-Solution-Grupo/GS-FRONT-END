document.addEventListener('DOMContentLoaded',()=>{
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById("proximo");
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn')

    //DECLARANDO O ARRAY DE PERGUNTAS
    const questoes=[
        "Quais são os principais fatores que contribuem para enchentes?",
        "Como as enchentes afetam a vida urbana?",
        "Quais são os impactos ambientais das enchentes?",
        "Quais são os principais sinais de uma enchente iminente?",
        "Como as enchentes podem afetar a infraestrutura de uma cidade?",
        "Como as enchentes afetam a economia local?",
        "Quais são os grupos mais vulneráveis durante enchentes?",
        "Como as enchentes podem afetar a saúde pública?",
        "Quais são os principais desafios enfrentados pelas autoridades durante enchentes?",
        "Como as enchentes podem ser monitoradas e previstas?",    
    ]
    //DECLARANDOS AS VARIAVEIS
    let perguntas = 0;
    const respostas = [];

    function mostrarPergunta(){
        if(perguntas <questoes.length){
            pergunta.textContent =questoes[perguntas];
            resposta.value='';
            mensagem.textContent ='';
        }else{
            mostrarResultado();
        }
    }

     function mostrarResultado(){
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML='';

        questoes.forEach((questoes,index)=>{
            const listaItem =document.createElement('li');
            listaItem.innerHTML = `<strong>${questoes}</strong><br>
            Sua Resposta: ${respostas[index]}`
            listaResultado.appendChild(listaItem);
        })
     }

     function nextQuestao(){
        const respostaAtual =resposta.value.trim();
        if(respostaAtual ===''){
            mensagem.textContent ="Por favor , digite sua resposta";
            return;
        }
        respostas.push(respostaAtual);
        perguntas++;
        mostrarPergunta();

     }
     function reiniciarQuiz(){
        perguntas =0;
        respostas.length =0;
        containerResultado.classList.add('hidden');
        containerPerguntas.classList.remove('hidden')
        mostrarPergunta();
     }

     proximaPergunta.addEventListener('click',nextQuestao);
     reiniciarBotao.addEventListener('click',reiniciarQuiz);

     mostrarPergunta();

})
