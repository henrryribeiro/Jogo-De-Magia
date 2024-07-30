// Classe base: Personagem
class Personagem {
    constructor(nome, cla, vida, ataque) {
        this.nome = nome; // Nome do personagem
        this.cla = cla; // Clã do personagem
        this.vida = vida; // Vida do personagem
        this.ataque = ataque; // Poder de ataque do personagem
    }

    // Método para atacar um inimigo
    atacar(inimigo) {
        inimigo.receberDano(this.ataque);
    }

    // Método para receber dano
    receberDano(dano) {
        this.vida -= dano; // Reduz a vida do personagem
        if (this.vida <= 0) {
            this.vida = 0;
            return `${this.nome} foi derrotado!`;
        }
        return `${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`;
    }
}

// Classe Jogador que herda de Personagem
class Jogador extends Personagem {
    constructor(nome, cla, vida, ataque) {
        super(nome, cla, vida, ataque);
        this.inventario = []; // Inventário do jogador
    }

    // Método para adicionar item ao inventário
    adicionarItem(item) {
        this.inventario.push(item);
    }

    // Método para usar item do inventário
    usarItem(item) {
        const index = this.inventario.indexOf(item);
        if (index > -1) {
            this.inventario.splice(index, 1);
        }
    }
}

// Função para escolher o clã do jogador
function escolherCla() {
    const clas = ['Aurora', 'Nyx', 'Solstice', 'Dusk'];
    let escolha = prompt(`Escolha seu clã: ${clas.join(', ')}`);
    while (!clas.includes(escolha)) {
        escolha = prompt(`Escolha inválida. Escolha seu clã: ${clas.join(', ')}`);
    }
    return escolha;
}

// Função principal para iniciar o jogo
function iniciarJogo() {
    const nome = prompt('Qual é o seu nome?');
    const cla = escolherCla();
    const jogador = new Jogador(nome, cla, 100, 10);
    window.jogador = jogador; // Armazena o jogador globalmente

    document.getElementById('content').innerHTML = `
        <h2>Bem-vindo(a), ${jogador.nome} do clã ${jogador.cla}!</h2>
        <p>Você está pronto para sua primeira aula de magia?</p>
        <button onclick="capitulo1()">Sim</button>
    `;
}

// Funções para diferentes capítulos do jogo
function capitulo1() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 1: A primeira aula</h2>
        <p>Você tem aula de Alquimia com o Mestre Zalazar. Como você se comporta?</p>
        <button onclick="escolha1A()">Sigo todas as instruções</button>
        <button onclick="escolha1B()">Experimento por conta própria</button>
    `;
}

function escolha1A() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 1: Aula de Alquimia</h2>
        <p>O Mestre Zalazar fica impressionado com sua dedicação. Você ganha 10 pontos para seu clã.</p>
        <button onclick="capitulo2()">Continuar</button>
    `;
}

function escolha1B() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 1: Aula de Alquimia</h2>
        <p>Você explode o caldeirão e perde 10 pontos para seu clã.</p>
        <button onclick="capitulo2()">Continuar</button>
    `;
}

function capitulo2() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: O corredor misterioso</h2>
        <p>Você encontra um corredor que nunca viu antes. O que você faz?</p>
        <button onclick="escolha2A()">Exploro o corredor</button>
        <button onclick="escolha2B()">Volto para o salão do clã</button>
    `;
}

function escolha2A() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: O corredor misterioso</h2>
        <p>Você encontra um mistério, mas também um perigo. O que você faz?</p>
        <button onclick="escolha2A1()">Investigo o mistério</button>
        <button onclick="escolha2A2()">Fujo do perigo</button>
    `;
}

function escolha2B() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: O salão do clã</h2>
        <p>Você decide que é mais seguro voltar. No caminho, você encontra um amigo que precisa de ajuda.</p>
        <button onclick="escolha2B1()">Ajudo o amigo</button>
        <button onclick="escolha2B2()">Ignoro o amigo</button>
    `;
}

function escolha2A1() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Investigação</h2>
        <p>Você descobre um artefato poderoso. O que você faz?</p>
        <button onclick="escolha2A1A()">Uso o artefato</button>
        <button onclick="escolha2A1B()">Guardo o artefato</button>
    `;
}

function escolha2A2() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Fuga</h2>
        <p>Você escapa por pouco, mas se sente fraco. O que você faz?</p>
        <button onclick="escolha2A2A()">Procurar ajuda</button>
        <button onclick="escolha2A2B()">Tentar se recuperar sozinho</button>
    `;
}

function escolha2B1() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Ajudando o amigo</h2>
        <p>Seu amigo lhe dá um item mágico como agradecimento. Você recebe um Elixir de Vida!</p>
        <button onclick="capitulo3()">Continuar</button>
    `;
}

function escolha2B2() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Ignorando o amigo</h2>
        <p>Você perde uma oportunidade de fazer um novo amigo e se sente culpado. Sua moral é afetada.</p>
        <button onclick="capitulo3()">Continuar</button>
    `;
}

function escolha2A1A() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Usando o artefato</h2>
        <p>O artefato lhe concede poderes incríveis, mas também atrai a atenção de forças sombrias. O que você faz?</p>
        <button onclick="escolha2A1A1()">Usar os poderes para o bem</button>
        <button onclick="escolha2A1A2()">Tentar se livrar do artefato</button>
    `;
}

function escolha2A1B() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Guardando o artefato</h2>
        <p>Você guarda o artefato em segredo, mas sente que algo está observando você. O que você faz?</p>
        <button onclick="escolha2A1B1()">Investigar a sensação</button>
        <button onclick="escolha2A1B2()">Ignorar a sensação</button>
    `;
}

function escolha2A1A1() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Poderes para o bem</h2>
        <p>Você usa os poderes do artefato para ajudar seu clã, mas atrai a atenção dos inimigos.</p>
        <button onclick="capitulo3()">Continuar</button>
    `;
}

function escolha2A1A2() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Livrando-se do artefato</h2>
        <p>Você se livra do artefato, mas sente que perdeu uma grande oportunidade.</p>
        <button onclick="capitulo3()">Continuar</button>
    `;
}

function escolha2A1B1() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Investigando a sensação</h2>
        <p>Você descobre que está sendo observado por um espírito guardião que quer ajudá-lo. O que você faz?</p>
        <button onclick="escolha2A1B1A()">Aceitar a ajuda do espírito</button>
        <button onclick="escolha2A1B1B()">Recusar a ajuda do espírito</button>
    `;
}

function escolha2A1B2() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Ignorando a sensação</h2>
        <p>Você tenta ignorar a sensação, mas ela continua a incomodá-lo.</p>
        <button onclick="capitulo3()">Continuar</button>
    `;
}

function escolha2A1B1A() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Aceitando a ajuda do espírito</h2>
        <p>O espírito guardião lhe concede sabedoria e proteção.</p>
        <button onclick="capitulo3()">Continuar</button>
    `;
}

function escolha2A1B1B() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Recusando a ajuda do espírito</h2>
        <p>Você recusa a ajuda do espírito, mas ele continua a vigiá-lo.</p>
        <button onclick="capitulo3()">Continuar</button>
    `;
}

function escolha2A2A() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Procurando ajuda</h2>
        <p>Você encontra um curandeiro que restaura sua força. O que você faz?</p>
        <button onclick="escolha2A2A1()">Agradeço e volto ao caminho</button>
        <button onclick="escolha2A2A2()">Ofereço ajuda ao curandeiro</button>
    `;
}

function escolha2A2B() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Recuperação solitária</h2>
        <p>Você tenta se recuperar sozinho, mas demora mais do que o esperado.</p>
        <button onclick="capitulo3()">Continuar</button>
    `;
}

function escolha2A2A1() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Agradecendo o curandeiro</h2>
        <p>Você agradece o curandeiro e segue seu caminho, sentindo-se revigorado.</p>
        <button onclick="capitulo3()">Continuar</button>
    `;
}

function escolha2A2A2() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 2: Ajudando o curandeiro</h2>
        <p>O curandeiro fica grato e lhe dá um amuleto de proteção.</p>
        <button onclick="capitulo3()">Continuar</button>
    `;
}

function capitulo3() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 3: O Torneio de Magia</h2>
        <p>Você foi escolhido para representar seu clã no torneio de Magia. Como você se prepara?</p>
        <button onclick="escolha3A()">Treino intensivo</button>
        <button onclick="escolha3B()">Confio nas minhas habilidades</button>
    `;
}

function escolha3A() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 3: Treinamento</h2>
        <p>Você treina duro e se torna um mago formidável, aumentando suas chances de vitória.</p>
        <button onclick="capitulo4()">Continuar</button>
    `;
}

function escolha3B() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 3: Confiança</h2>
        <p>Você confia nas suas habilidades naturais, mas descobre que os outros magos também estão muito bem preparados.</p>
        <button onclick="capitulo4()">Continuar</button>
    `;
}

function capitulo4() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 4: O Torneio</h2>
        <p>O torneio começa e você enfrenta seu primeiro adversário. Como você joga?</p>
        <button onclick="escolha4A()">Com estratégia</button>
        <button onclick="escolha4B()">Com agressividade</button>
    `;
}

function escolha4A() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 4: Estratégia</h2>
        <p>Você joga com inteligência e vence seu adversário com táticas bem pensadas.</p>
        <button onclick="capitulo5()">Continuar</button>
    `;
}

function escolha4B() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 4: Agressividade</h2>
        <p>Você joga de forma agressiva e vence pela força, mas isso causa problemas com outros magos.</p>
        <button onclick="capitulo5()">Continuar</button>
    `;
}

function capitulo5() {
    const conteudo = document.getElementById('content');
    conteudo.innerHTML = `
        <h2>Capítulo 5: O Desfecho</h2>
        <p>Depois de muitas aventuras, você finalmente alcança seu objetivo na Academia de Magia.</p>
        <button onclick="reiniciarJogo()">Recomeçar</button>
    `;
}

function reiniciarJogo() {
    iniciarJogo();
}

// Inicia o jogo ao carregar a página
document.addEventListener('DOMContentLoaded', iniciarJogo);

