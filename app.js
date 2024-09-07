console.log("Você achou o Easter-Egg!");

// Obtém a seção HTML onde os resultados serão exibidos.


// Função para realizar a pesquisa e exibir os resultados.
function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();

    console.log(campoPesquisa);

    // Se campoPesquisa for vazio,
    // escreve mensagem de aviso na
    // tela e termina o uso da função
    if(!campoPesquisa){
        section.innerHTML = "<p>Nenhum músico encontrado! Digite algo.</p>";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
    let resultado = "";

    let nome = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada músico no array 'musicos'.
    for (let musico of musicos) {

        nome = musico.nome.toLowerCase();
        descricao = musico.descricao.toLowerCase();
        tags = musico.tags.toLowerCase();

        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Constrói o HTML para cada item do resultado da pesquisa, formatando os dados do músico.
            resultado += `
            <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">
            ${musico.nome}
            </a>
            </h2>
            <p class="descricao-meta">
            ${musico.descricao}
            </p>
            <a href="${musico.linkiwiki}" target="_blank">
            Mais informações
            </a>
            </div>`;
        }
    }

    if(!resultado){
        resultado = "<p>Nenhum músico encontrado!</p>";
    }

    // Atribui o HTML gerado para a seção de resultados.
    section.innerHTML = resultado;
}
