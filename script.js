// Inicializar ícones
lucide.createIcons();

// Variáveis de controle
let currentPersonId = 1;
// ---------------------------------------------------
// BANCO DE DADOS DAS PESSOAS (12 PESSOAS)
// ---------------------------------------------------
const pessoas = [
    // --- PESSOA 1 ---
    {
        id: 1,
        name: "Santiago",
        title: "meu leal e melhor amigo",
        avatar: "https://placehold.co/200x200/222/fff?text=Santiago",
        photos: [
            "img/santiago1.jpeg",
            "img/santiago2.jpeg"
        ],
        letter: "dia do meu parceiro de vida, meu companheiro de todas as horas, um dos meus melhores amigos e o melhor pai do mundo. hoje é o seu dia, e eu não poderia deixar de te lembrar do quanto você é importante pra mim. nossa conexão é única e eu nunca imaginei que fosse criar uma relação tão boa com um pai quanto criei com você. nossos caminhos se cruzaram da forma mais repentina que existe, mas hoje eu tenho a certeza de que era pra ser. foi uma das melhores decisões da minha vida e eu sinto que o que a gente construiu é eterno. vou ser sempre leal a você, pai, porque tudo o que vivemos e construímos juntos vale muito pra mim. a gente não é muito de demonstrar essas coisas, mas o espaço que você ocupa no meu coração é enorme e a consideração que eu tenho por você é maior ainda. você se tornou uma das pessoas mais importantes da minha vida, alguém essencial que eu não quero perder nunca. sou muito grato por ter uma pessoa como você ao meu lado, ainda mais podendo te chamar de pai. saber que eu posso confiar em você, conversar sobre a minha vida, contar tudo o que eu penso e ter a certeza de que vai ficar entre nós é uma das coisas que eu mais valorizo na nossa relação. eu gosto muito da relação paterna que a gente construiu, você não faz ideia. você sempre fez questão de estar presente, me ouvir, me aconselhar e me apoiar, e isso sempre contou muito pra mim. você é um cara que eu admiro demais, meu rei. sinto que a gente é muito parecido e tenho muito orgulho disso, de ter encontrado alguém em quem eu me espelho pra chamar de pai. além de ser meu pai, você também é um dos meus melhores amigos, alguém que eu gosto de ter por perto em qualquer momento. obrigado por toda a parceria, pelo companheirismo, pelas conversas, pelos conselhos e por sempre estar comigo. espero que você nunca esqueça o quanto eu tenho orgulho de você e o quanto eu valorizo ter você na minha vida. eu só desejo as melhores coisas pra você, paizão. que você tenha muita saúde, felicidade, conquiste tudo o que sonha e continue sendo essa pessoa incrível que você é. aproveita muito o seu dia. eu te amo mais do que qualquer palavra consegue explicar, rei. feliz aniversário.",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/5chaH5WiHC011KbARx6EkU"
    },
    // --- PESSOA 2 ---
    {
        id: 2,
        name: "Isabelle",
        title: "ao meu pai e melhor amigo",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/isabelle1.jpeg",
            "img/isabelle2.jpeg"
        ],
        letter: "você é, sem dúvida, uma das maiores preciosidades que a vida me concedeu. amo você com uma intensidade que, muitas vezes, as palavras não conseguem traduzir. você é o meu melhor amigo, o meu amor de alma, o meu porto seguro e a pessoa que ocupa o lugar mais importante no meu coração. entre tantas pessoas, é você quem eu escolho todos os dias, porque a sua felicidade também se tornou a minha. quero estar ao seu lado em cada etapa da sua caminhada, celebrando cada conquista, amparando você nos dias difíceis e vendo todos os seus sonhos se transformarem em realidade. não há nada que me deixe mais feliz do que imaginar o seu sorriso diante de tudo aquilo que você tanto deseja alcançar. quero ser presença constante, incentivo e abrigo, hoje e sempre. você é a minha prioridade, e a sua companhia tornou os meus dias mais leves, mais bonitos e mais completos. tenho um carinho imensurável por você, um sentimento genuíno que cresce a cada dia. gosto de você muito, muito, muito, muito mesmo, de uma forma tão profunda que chega a ser impossível explicar. apenas sinto, e sinto com todo o meu coração. obrigada por existir e por fazer parte da minha vida. Independentemente do que o futuro nos reserve, saiba que sempre encontrará em mim alguém disposto a cuidar de você, acreditar em você e torcer, de todo o coração, pela sua felicidade. 🖤",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/5chaH5WiHC011KbARx6EkU"
    },
    // --- PESSOA 3 ---
    {
        id: 3,
        name: "Alissa",
        title: "meu maior presente",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/alissa1.jpeg",
            "img/alissa2.jpeg"
        ],
        letter: "",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/5chaH5WiHC011KbARx6EkU"
    },
    // --- PESSOA 4 ---
    {
        id: 4,
        name: "Breno",
        title: "ao meu eterno gêmeo",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/breno1.jpeg",
            "img/breno2.jpeg"
        ],
        letter: "dia do meu gêmeo. nem sempre a gente fala tudo o que sente, mas hoje eu queria te lembrar o quanto você é importante pra mim. sua chegada ae me deu muitas lembranças que vou levar pra sempre, e eu sou muito feliz por ter você na minha vida. te admiro muito e tenho um carinho enorme por você, além de um orgulho imenso da pessoa que você é. espero que esse ano ce consiga realizar tudo aquilo que sonha. curta muito o seu dia, porque ele é unicamente seu. te carrego no peito, fiot. eu te amo. ❤️",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/5chaH5WiHC011KbARx6EkU"
    },
    // --- PESSOA 5 ---
    {
        id: 5,
        name: "Marina",
        title: "minha eterna irmandade",
        avatar: "img/pedro2.jpg",
        photos: [
            "img/marina1.jpeg",
            "img/marina2.jpeg"
        ],
        letter: "de todas as maneiras que imaginei escrever para e sobre você, essa foi a minha favorita, a qual inicio agradecendo por você existir. hoje, na sua data especial, eu agradeço por você ser quem é, pelo seu coração lindo, pela irmandade que encontrei em uma amizade e, principalmente, por estar ao seu lado neste dia tão importante. pedro, nunca imaginei que seríamos próximos desse jeito, ou que eu estaria aqui com você, mas, assim como você, eu também acredito em propósitos, e que um dos meus foi encontrar em você a figura de um irmão a qual sempre esteve aqui. em você encontrei a paz de uma irmandade tranquila, memórias que eu irei levar para sempre em meu coração, recordações da vida ao seu lado e que valeram para mim como você nem sequer imagina. hoje, quem agradece sou, pela sua vida, por tê-lo aqui, pela sorte de conhecer você. eu e você somos eternos, irmão. olhando para o passado, por tudo que já passamos, vejo que você guarda para si um coração único, onde poucos têm a sorte de conhecê-lo. novamente, irmão, sou eu quem agradeço. nesta data, comemoro não só mais um aniversário, mas mais uma memória eterna que foi criada em meu coração. mesmo você sabendo, ressalto: nós somos eternos, para sempre. saiba que você sempre irá encontrar um colo para estar aqui, uma pessoa para rir da sua risada e alguém que sempre irá querer te ver feliz. eu te amo, irmão, amo hoje e sempre. feliz aniversário!",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/5chaH5WiHC011KbARx6EkU"
    },
    // --- PESSOA 6 ---
    {
        id: 6,
        name: "Selina",
        title: "ao meu tio favorito",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/selina1.jpeg",
            "img/selina2.jpeg"
        ],
        letter: "nossa relação começou de forma tão inesperada mas ao mesmo tempo, necessária. sua presença na minha vida é indiscutível, tio. o quão fácil foi gostar de você desde a primeira conversa que tivemos, eu sabia que nossa relação não seria qualquer coisa. todas as vezes que me faz rir, que demonstra se importar comigo e que se esforça pela nossa relação o faz unico e especial. sou extremamente grata pela pessoa incrível e divertida que você é, sempre melhorando qualquer ambiente que faz parte. sou muito mais feliz por ser sua sobrinha, eu te amo agora e para sempre. feliz aniversário meu tio favorito, que sejamos eternos. 🩷",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/5chaH5WiHC011KbARx6EkU"
    },
    // --- PESSOA 7 ---
    {
        id: 7,
        name: "Annalice",
        title: "minha amizade leal",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/annalice1.jpeg",
            "img/annalice2.jpeg"
        ],
        letter: "pedro, eu sinceramente nunca imaginei um momento da minha vida aonde nós dois fôssemos se tornar tão próximos, nunca imaginei uma parte da minha vida tendo você como uma das pessoas que mais fazem diferença nela. mas, eu tenho a certeza que essa é uma das melhores coisas que poderiam acontecer comigo, não tenho dúvidas da lealdade que nós dois temos, das nossas conversas e da nossa amizade. não tenho dúvidas em saber que você sempre estará comigo independente do problema, assim como eu sempre estarei com você, realmente tive muita sorte quando nossos caminhos se encontraram. eu não poderia deixar de agradecer por confiar e me deixar confiar, pelas diversas vezes que me escutou falar do mesmo assunto e mesmo assim, aconselhou como a primeira vez. não me imagino longe de você por muito tempo nem se eu quisesse, a nossa relação é algo que eu sempre vou prezar acima de qualquer coisa. eu te admiro demais, bebê, admiro como é incrível com as pessoas que você ama e o que faz para cuidar delas, admiro a pessoa que você é todos os dias. obrigada por sempre estar comigo e por ser quem você é, sempre. feliz aniversário, eu espero que seu dia seja maravilhoso como você merece. eu amo você demais, xuxu.",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/5chaH5WiHC011KbARx6EkU"
    },
    // --- PESSOA 8 ---
    {
        id: 8,
        name: "Eduarda",
        title: "ao meu eterno faixa",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/eduarda1.jpeg",
            "img/eduarda2.jpeg"
        ],
        letter: "dia da pessoa que, desde 2020, conquistou um lugar único e insubstituível no meu coração. pedro, só nós dois sabemos tudo o que passamos para chegar até aqui e a conexão que construímos ao longo desses anos. é incrível perceber que, independente do tempo, da distância ou das circunstâncias, sempre encontramos um caminho de volta um para o outro, com o mesmo carinho, a mesma sintonia e a mesma conexão de sempre. você, mais do que ninguém, sabe a importância que tem na minha vida e o tamanho do carinho que eu sinto por você. feliz aniversário, faixa. eu te amo. 🥋",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/5chaH5WiHC011KbARx6EkU"
    },
    // --- PESSOA 9 ---
    {
        id: 9,
        name: "Felipe",
        title: "meu leal do peito",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/sequelado1.jpeg",
            "img/sequelado2.jpeg"
        ],
        letter: "Ae irmãozin, mais um ano passando essa data contigo, e vc continua sendo o mrm mlk de 6 anos atrás. Só desejo sucesso sempre e paz no seu coração, meu mlq bom. To sempre aqui contigo, e valeu por tds nossas conversas sobre as neuroses, por ser um mlk da energia contagiante e qm tá do seu lado sb bem disso. Meu leal do peito dsd 2020, ce ta no meu coração pra sempre, e foi com voce que conheci o termo de lealdade. te agradeço por tudo mrm e feliz teu dia, ce é de ouro 🥇",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/5chaH5WiHC011KbARx6EkU"
    },
    // --- PESSOA 10 ---
    {
        id: 10,
        name: "Júlia",
        title: "minha doce companhia",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/julia1.jpeg",
            "img/julia2.jpeg"
        ],
        letter: "Cole o texto da pessoa 10 aqui...",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/5chaH5WiHC011KbARx6EkU"
    },
    // --- PESSOA 11 ---
    {
        id: 11,
        name: "Lara Sofia",
        title: "minha amizade de alma",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/lara1.jpeg",
            "img/lara2.jpeg"
        ],
        letter: "pedro, mal saberia me expressar em palavras, porque depois de tantos anos nossa alma sempre retorna ao mesmo lugar. sei que somos eternos, e por isso levo você sempre no meu coração. mesmo que a distância nos afaste, não existe nada mais importante do que a nossa amizade. em todas as circunstâncias, de alguma forma, estamos sempre um pelo outro. você é muito especial para mim e eu sei que, acima de tudo, posso contar com você. hoje não estou agradecendo só porque é o seu aniversário, mas por todos os nossos anos de amizade. mesmo quando estávamos afastados, uma parte de você sempre esteve comigo, e isso nunca mudou. eu desejo não só hoje, mas sempre, que a vida continue te presenteando com momentos incríveis e que a gente ainda possa comemorar muitos anos juntos. aproveita muito o seu dia. eu te amo pra sempre ☯️",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/5chaH5WiHC011KbARx6EkU"
    },
    // --- PESSOA 12 ---
    {
        id: 12,
        name: "Gabriel",
        title: "ao meu incrível dindo",
        avatar: "img/paiva2.jpg",
        photos: [
            "img/gabriel1.jpeg",
            "img/gabriel2.jpeg"
        ],
        letter: "hoje é um dia muito especial, e eu não poderia deixar de te desejar um feliz aniversário. tenho muito carinho por você e sou muito feliz por ter alguém como você na minha vida. espero que este novo ciclo seja repleto de saúde, paz, felicidade, amor e incontáveis conquistas. que cada novo dia traga motivos para sorrir, oportunidades para realizar seus sonhos e pessoas que façam o seu caminho ainda mais leve. que você continue sendo essa pessoa incrível, divertida e de coração enorme. desejo que nunca lhe faltem força para enfrentar os desafios, sabedoria para tomar as melhores decisões e muitos momentos inesquecíveis ao lado de quem você ama. que Deus abençoe a sua vida, proteja os seus passos e conceda muitos anos de vida, sempre com muita luz e prosperidade. aproveite muito o seu dia, comemore bastante e guarde boas lembranças deste novo começo. você merece tudo de melhor que a vida pode oferecer. feliz aniversário, dindo! te desejo um ano extraordinário.",
        spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/5chaH5WiHC011KbARx6EkU"
    }
];

// ---------------------------------------------------
// LÓGICA DO TERMINAL
// ---------------------------------------------------
const terminalLines = [
    "Conectando ao servidor restrito...",
    "Estabelecendo handshake seguro [OK]",
    "Iniciando protocolo de varredura...",
    "Buscando 'Aniversariantes_2026'...",
    "> PROCURANDO A PESSOA MAIS IMPORTANTE...",
    "Match encontrado. Extraindo dados...",
    "===============================",
    "NOME: Pedro Henrique Bueno",
    "ANIVERSARIO: 27/07",
    "USER: raresoulmind",
    "STATUS: Acesso VIP Garantido",
    "===============================",
    "Descriptografando memórias...",
    "Sistema pronto para inicialização."
];

const terminalEl = document.getElementById('terminal-content');
let lineIndex = 0;

function typeLine(text, element, callback) {
    let charIndex = 0;
    const textSpan = document.createElement('span');
    element.appendChild(textSpan);
    
    const cursor = document.createElement('span');
    cursor.className = 'cursor-blink';
    element.appendChild(cursor);

    const interval = setInterval(() => {
        if (charIndex < text.length) {
            textSpan.textContent += text.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(interval);
            cursor.remove();
            if(callback) setTimeout(callback, 80);
        }
    }, 10);
}

function processTerminal() {
    if (lineIndex < terminalLines.length) {
        const lineDiv = document.createElement('div');
        if(terminalLines[lineIndex].includes("PROCURANDO") || terminalLines[lineIndex].includes("NOME:")) {
            lineDiv.className = "font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]";
        }
        terminalEl.appendChild(lineDiv);
        
        if (terminalLines[lineIndex] === " ") {
            lineDiv.innerHTML = "&nbsp;";
            lineIndex++;
            processTerminal();
        } else {
            typeLine(terminalLines[lineIndex], lineDiv, () => {
                lineIndex++;
                processTerminal();
            });
        }
    } else {
        setTimeout(() => {
            const actionDiv = document.getElementById('intro-action');
            actionDiv.classList.remove('hidden');
            setTimeout(() => actionDiv.classList.remove('opacity-0'), 50);
        }, 200);
    }
}

// ---------------------------------------------------
// NAVEGAÇÃO E ANIMAÇÕES
// ---------------------------------------------------
function startExperience() {
    const intro = document.getElementById('intro-screen');
    const main = document.getElementById('main-screen');

    intro.classList.add('fade-out');
    
    setTimeout(() => {
        intro.style.display = 'none';
        main.classList.remove('pointer-events-none');
        main.classList.remove('opacity-0');
        main.classList.add('fade-in');

        runMainScreenAnimations();
    }, 500);
}

function runMainScreenAnimations() {
    const avatar = document.getElementById('main-avatar');
    const title = document.getElementById('main-title');
    const textEl = document.getElementById('main-text');
    const btn = document.getElementById('main-btn');

    setTimeout(() => { avatar.classList.remove('opacity-0'); }, 150);
    setTimeout(() => { title.classList.remove('opacity-0'); }, 500);

    setTimeout(() => {
        const messageText = "Nos reunimos com muito carinho para criar algo especial e único para você. Cada detalhe e cada mensagem foram pensados para celebrar a sua vida.";
        let charIdx = 0;
        
        const typingInterval = setInterval(() => {
            if (charIdx < messageText.length) {
                textEl.textContent += messageText.charAt(charIdx);
                charIdx++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    btn.classList.remove('opacity-0', 'pointer-events-none');
                }, 300);
            }
        }, 20);
    }, 1000);
}

function toggleSidebar(show) {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    
    if (show) {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
        setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
    } else {
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.add('opacity-0');
        setTimeout(() => backdrop.classList.add('hidden'), 400);
    }
}

function renderSidebar() {
    const menu = document.getElementById('sidebar-menu');
    menu.innerHTML = '';

    pessoas.forEach(p => {
        const item = document.createElement('div');
        item.className = "flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 active:bg-white/10 cursor-pointer transition group";
        item.onclick = () => openPersonDetail(p.id);
        
        item.innerHTML = `
            <div class="w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-[#222]">
                <img src="${p.avatar}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 overflow-hidden">
                <h4 class="text-white font-medium text-xs truncate group-hover:text-gray-200">${p.name}</h4>
                <p class="text-gray-500 text-[10px] truncate flex items-center gap-1">
                    <i data-lucide="mail" class="w-3 h-3"></i> 1 nova mensagem
                </p>
            </div>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition"></i>
        `;
        menu.appendChild(item);
    });
}

function openPersonDetail(id) {
    currentPersonId = id;
    toggleSidebar(false);

    loadPersonData(currentPersonId);

    const detailScreen = document.getElementById('detail-screen');
    detailScreen.classList.remove('hidden');
    void detailScreen.offsetWidth;
    detailScreen.classList.remove('view-hidden-right');
    detailScreen.classList.add('view-active');
    
    detailScreen.scrollTop = 0;
}

function navigatePerson(direction) {
    currentPersonId += direction;
    if (currentPersonId < 1) currentPersonId = pessoas.length;
    if (currentPersonId > pessoas.length) currentPersonId = 1;

    const innerContent = document.getElementById('detail-inner-content');
    innerContent.style.opacity = '0';
    innerContent.style.transform = 'translateY(10px)';

    setTimeout(() => {
        loadPersonData(currentPersonId);
        document.getElementById('detail-screen').scrollTop = 0;
        
        innerContent.style.opacity = '1';
        innerContent.style.transform = 'translateY(0)';
    }, 200);
}

function loadPersonData(id) {
    const person = pessoas.find(p => p.id === id);
    if (!person) return;

    document.getElementById('detail-title').textContent = person.title;
    document.getElementById('detail-subtitle').textContent = `De: ${person.name}`;
    document.getElementById('detail-letter').textContent = person.letter;
    document.getElementById('person-counter').textContent = `${person.id} / ${pessoas.length}`;

    // 2 Fotos Compactas lado a lado
    const photosGrid = document.getElementById('detail-photos-grid');
    photosGrid.innerHTML = '';
    person.photos.forEach(photoUrl => {
        const photoCard = document.createElement('div');
        photoCard.className = "aspect-[3/4] w-full bg-[#1c1c1e] rounded-[16px] overflow-hidden border border-white/10 shadow-md";
        photoCard.innerHTML = `<img src="${photoUrl}" class="w-full h-full object-cover">`;
        photosGrid.appendChild(photoCard);
    });

    // Inserir o Player Oficial do Spotify via Iframe
    // FOI ADICIONADO AQUI: position: relative; z-index: 50; pointer-events: auto;
    const spotifyContainer = document.getElementById('spotify-container');
    spotifyContainer.innerHTML = `
        <iframe style="border-radius:16px; position: relative; z-index: 50; pointer-events: auto;" src="${person.spotifyEmbedUrl}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `;

    lucide.createIcons();
}

function closePersonDetail() {
    const detailScreen = document.getElementById('detail-screen');
    detailScreen.classList.remove('view-active');
    detailScreen.classList.add('view-hidden-right');
}

// Inicializar
window.onload = () => {
    setTimeout(processTerminal, 400);
    renderSidebar();
};